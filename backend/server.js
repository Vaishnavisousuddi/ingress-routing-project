const express = require("express");
const app = express();

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Backend on EKS!" });
});

app.listen(8080, () => console.log("Backend running on port 8080"));
