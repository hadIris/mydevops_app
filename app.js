const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Calculator API is running");
});

app.get("/add", (req, res) => {
  const { a, b } = req.query;
  res.json({ result: Number(a) + Number(b) });
});

app.get("/subtract", (req, res) => {
  const { a, b } = req.query;
  res.json({ result: Number(a) - Number(b) });
});

app.get("/multiply", (req, res) => {
  const { a, b } = req.query;
  res.json({ result: Number(a) * Number(b) });
});

app.get("/divide", (req, res) => {
  const { a, b } = req.query;
  if (Number(b) === 0) {
    return res.status(400).json({ error: "Division by zero" });
  }
  res.json({ result: Number(a) / Number(b) });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Calculator API running on port ${PORT}`);
});
