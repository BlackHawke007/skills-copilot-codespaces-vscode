// create web server
const express = require("express");
const app = express();
const port = 8000;

// create a route
app.get("/comments", (req, res) => {
  // res.send("Hello World!");
  res.json([
    { id: 1, title: "Comment 1", body: "This is the first comment" },
    { id: 2, title: "Comment 2", body: "This is the second comment" },
    { id: 3, title: "Comment 3", body: "This is the third comment" },
  ]);
});

// start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});