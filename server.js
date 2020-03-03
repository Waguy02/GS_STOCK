const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
//const test = require('./test')
const app = express();
var cors = require('cors');
const yargs = require('yargs');

const argv = yargs.argv;
// Bodyparser Middleware
app.use(express.json());

//DB config
const url = require("./config/keys").mongoURI;

// Connect to Mongodb
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));


// Use Routes
app.use(cors());

app.use('/stock/category',require('./routes/stock/category'));
app.use('/stock/product',require('./routes/stock/product'));
  const port = argv.port||5000;

  const host= argv.host||'127.0.0.1';
  app.listen(port,host, () => console.log(`Server started on port ${port}  and host ${host}`));


