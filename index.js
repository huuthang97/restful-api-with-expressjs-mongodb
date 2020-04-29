require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// import router
const productRouter = require('./routes/product.route.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ROUTES
app.use('/products', productRouter);


const Port = process.env.Port ? process.env.Port : '3001';
app.listen(Port, ()=>{
	console.log('______Server runing.....')
});