const express = require('express');
const bodyParser = require('body-parser');
const mongoose =  require('mongoose');
const bcrypt = require("bcrypt");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const cors = require('cors');
const { nanoid } = require("nanoid");

//import routes

const AccountRouter = require('./routes/accountRouter');
const userSignup = require('./routes/userSignupRouter');
const productRouter = require('./routes/productRouter');
const app = express();
app.use( 
session({ 
store: MongoStore.create({ mongoUrl:"mongodb+srv://nisha:passwordabc123@cluster0.kstue.mongodb.net/myShopingCart?retryWrites=true&w=majority", 
}), 
secret: "keyboardcat",
resave: false, 
saveUninitialized: false, 
cookie: { 
secure: false, 
maxAge: 1000 * 60 * 60 * 2, 
sameSite: true }, 
}));

mongoose.connect('mongodb+srv://nisha:passwordabc123@cluster0.kstue.mongodb.net/myShopingCart?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//routes middleware
app.use(AccountRouter);
app.use('/user', userSignup);
app.use(productRouter);

app.listen(3001, () => {
    console.log('Listening on port 3001')
});
