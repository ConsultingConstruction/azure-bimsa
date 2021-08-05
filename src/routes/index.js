const express = require('express');
const router = express.Router();
const azure = require('/consulting/config/azure-db');
var sql = require("mssql");

router.get('/test', async (req, res, next) => {
  sql.connect(azure.sqlConfig, function (err) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query(`SELECT * from aspnetusers where email=dasda`, function (err, data) {

      if (err) console.log(err)

      // send records as a response
      res.json(data.recordset)

    });
  });
})

module.exports = router;
