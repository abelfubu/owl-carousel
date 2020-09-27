const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const alumnos = [
  { nombre: "Roger", edad: 29 },
  { nombre: "Mario", edad: 33 },
  { nombre: "Abel", edad: 39 },
];

app.get("/", (req, res) => {
  res.json({ result: alumnos });
});

app.post("/", (req, res) => {
  if (req.body) {
    alumnos.push(req.body);
  }
});

app.listen(3000);
