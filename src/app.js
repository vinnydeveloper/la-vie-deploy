const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const handleError = require("./middlewares/handleError");

const db = require("./database");

const app = express();

db.hasConection();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(handleError);

app.listen(4000, () => console.log("Servidor rodando na porta 4000"));
