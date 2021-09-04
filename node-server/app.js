const { urlencoded } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

const db = [];
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes
app.get("/", (req, res) => {
  res.send("hello express server");
});

//get todo
app.get("/todo", (req, res) => {
  res.json(db);
});

app.get("/todo/:id", (req, res) => {
  const todo = db.find((t) => t.id === +req.params.id);
  res.json({ data: todo });
});

//post todo data
app.post("/todo", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
  };
  //save them in to db
  db.push(newTodo);
  //send response
  res.json(newTodo);
});

//servier is listening
app.listen(PORT, () => {
  console.log(`Servie is listening at ${PORT}`);
});
