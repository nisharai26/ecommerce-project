const express = require('express');
const bodyParser = require('body-parser');
const mongoose =  require('mongoose');
const cors = require('cors');

//import routes

const AccountRouter = require('./routes/accountRouter');

const app = express();

mongoose.connect('mongodb+srv://nisha:passwordabc123@cluster0.kstue.mongodb.net/myShopingCart?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//routes middleware
app.use(AccountRouter);

app.listen(3001);