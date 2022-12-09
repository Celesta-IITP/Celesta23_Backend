const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./configs/config');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => {
        console.log('Successfully connected to the database');
},
    (error) => {
        console.log('Could not connect to the database: ' + error);
    }
);
app.use(bodyParser.json());
const events = require('./routes/events');
app.use('/api', events);

//Catch 404 errors and forward them to error handelers
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  });
  
  //Error handeler function
  app.use((err, req, res, next) => {
    const error = err;
    const status = err.status || 500;
    //respond to clients
    res.status(status).send(error.message);
    //respond to ourselves
    console.error(err);
  });


app.listen(process.env.port || 4000, function () {
    console.log('Server is listening on port 4000');
});