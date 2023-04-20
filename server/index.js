const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
});

app.get("/", (req, res) => {
  db.query(
    "INSERT INTO usuarios (email, password) VALUES ('ryanoliveirasp@gmail.com', '1234567')"
  );
});
app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
