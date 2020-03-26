const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//const test = require('./test')
const app = express();
var cors = require('cors');
const yargs = require('yargs');

const argv = yargs.argv;
// Bodyparser Middleware
app.use(express.json());

//DB config
const url = require("./config/keys").mongoURI;

function connect(){

  console.log("Connecting to database");
  mongoose
      .connect(url, { useNewUrlParser: true })
      .then(() => console.log("MongoDB Connected..."))
      .catch(err => {console.log(err);console.log("\n Reconnecting");connect()});

}

// Connect to Mongodb
connect();

// Use Routes
app.use(cors());

app.use('/stock/category',require('./routes/stock/category'));
app.use('/stock/product',require('./routes/stock/product'));
app.use('/stock/product_class',require('./routes/stock/product_class'))
app.use('/partners/customer',require('./routes/partners/customers'));
app.use('/partners/provider',require('./routes/partners/providers'));
app.use('/stock_operations/product_command',require('./routes/stock_operations/product_command'));
app.use('/stock_operations/product_command_unit',require('./routes/stock_operations/product_command_unit'));
app.use('/stock_operations/sale',require('./routes/stock_operations/sale'));
app.use('/stock_operations/sale_unit',require('./routes/stock_operations/sale_unit'));



app.use('/payment/payment',require('./routes/payment/payment'))
app.use('/management/manager',require('./routes/management/manager'));

var process=require("process");
  const port = process.env.PORT||5000;

  const host= argv.host||'0.0.0.0';
  app.listen(port,host, () => console.log(`Server started on port ${port}  and host ${host}`));



