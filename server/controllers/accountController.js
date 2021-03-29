const CustomerModel = require('../models/customerModel');


exports.searchCustomer = async (req, res) => {
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
};

exports.createInfo =(req,res)=>{
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

};
exports.deleteInfo =(req,res)=> {
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
  

};
exports.updateInfo = async(req, res) => {
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
};
