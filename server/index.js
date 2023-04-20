const express = require("express");
const app = express();
const mysql = require("mysql");

const cors = require("cors");
const db = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "1234",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length === 0) {
      db.query(
        "INSERT INTO usuarios (email, password) VALUES (?, ?)",
        [email, password],
        (err, response) => {
          if (err) {
            res.send(err);
          }
          res.send({ msg: "Cadastrado com sucesso" });
        }
      );
    } else {
      res.send({ msg: "Usuario já cadastrado" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM usuarios WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
        if(err){
            res.send(err);
        }
        if(result.length > 0){
            res.send({msg: 'Usuário logado com sucesso!'})
        }else{
            res.send({msg: 'Conta não encontrado'})
        }
    }
  );
});
app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
