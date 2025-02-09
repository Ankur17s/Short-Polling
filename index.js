const express = require("express");
const app = express();

let data = "Initial data";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  res.send({
    data,
  });
});

// user post/put to update
app.get("/updateData", (req, res) => {
  data = "updated data";
  res.send({
    data,
  });
});

const port = process.env.PORT || 5011;
app.listen(port, () => {
  console.log(`server is listen on port ${port}`);
});
