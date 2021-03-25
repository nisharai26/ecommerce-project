const express = require('express');
const bodyParser = require('body-parser');
const mongoose =  require('mongoose');
const cors = require('cors');

const CustomerModel = require('./models/customerModel');


const app = express();

mongoose.connect('mongodb+srv://nisha:passwordabc123@cluster0.kstue.mongodb.net/myShopingCart?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/customer/all', async (req, res) => {
    let customers = await CustomerModel.find({});

    if (customers.length == 0) {
        res.send({
            success: false,
            message: 'No customers found in database'
        });
        return;
    }

    customers = customers.map(customer => customer.toObject());

    res.send({
        success: true,
        message: `${customers.length} customers found`,
        data: customers
    });
});

app.post('/customer/create',(req,res)=>{
    const {name,addressline1,addreessline2,postcode,email,password}=req.body;
    const customer = new CustomerModel({
        name,
       addressline1,
       addreessline2,
       postcode,
       email,
       password,
       orders:[]
    });
    customer.save();

    res.send({
        success:true,
        message:'New customer was created'
    });

});
app.delete('/customer/delete/:id',(req,res)=> {
    CustomerModel.deleteOne({_id:req.params.id},(err)=>{
        if(err){
            res.send({
                success:false,
                message:err
            });
        } else {
            res.send({
                success:true,
                message:'Customer was removed sucessfully'
            })
        }
    });
  

});
app.put('/customer/update/:id', async(req, res) => {
    let {name, address,email,password} = req.body;

    if (!name) {
        name = undefined;
    }
    if (!addressline1) {
        addressline1 = undefined;
    }
    if (!addressline2) {
        addressline2 = undefined;
    }
    if (!postcode) {
        postcode = undefined;
    }
    if (!email) {
        email = undefined;
    }
    if (!password) {
       password = undefined;
    }
 

    let result = await CustomerModel.updateOne({_id: req.params.id}, {
        name,
        addressline1,
        addreessline2,
        postcode,
        email,
        password,
      
    }, {omitUndefined: true});

    res.send({
        success: true,
        message: `${result.nModified} document changed`
    });
});


app.listen(3001);