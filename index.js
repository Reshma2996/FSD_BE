//connect to the DB
//import mongoose
const mongoose = require ( 'mongoose');

//import config module
const config = require ('./utils/config');

//console.log the message connecting to MongoDB followed by the URI without the password
console.log('Connecting to MongoDB..')
//connect to DB
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })

  .catch((error) => {
    console.log('Error connecting to MongoDB:' , error.message);
  });

