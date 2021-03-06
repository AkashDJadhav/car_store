var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes to carry each of the CRUD operations
require('./routes/new.js')(app);
require('./routes/home.js')(app);
require('./routes/delete.js')(app);
require('./routes/updateByID.js')(app);
require('./routes/updateByOwner.js')(app);
require('./routes/homeOlderCars.js')(app);

  //Connection to database - REPLACE uri with your own database, cluster, username, and password
  const uri = ''; // add mongodb uri
  mongoose.Promise = global.Promise;
  
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  mongoose.connection.on('error', function(error) {
      console.log('Connection to Mongo established.');
      console.log('Could not connect to the database. Exiting now...');
      console.log(error);
      process.exit();
  });
  mongoose.connection.once('open', function() {
      console.log("Successfully connected to the database");
  })

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on Port ${PORT}`));
