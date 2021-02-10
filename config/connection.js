const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'd8sjw3o39ibio5me',
    password: 'hvi01jfvziptxusb',
    database: 'jd6y8ybwcyqgaubt',
  });

  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
  });

module.exports = connection;