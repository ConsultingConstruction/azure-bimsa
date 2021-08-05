const express = require('express');
const morgan = require('morgan');
var sql = require("mssql");

const app = express();

// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3030);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
