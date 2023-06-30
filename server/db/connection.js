const mysql = require("mysql2");

const conn = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Shlok@7024",
  database: "userimgupload",
});

conn.connect((error) => {
  if (error) throw error;
  console.log("Connected");
});

module.exports=conn