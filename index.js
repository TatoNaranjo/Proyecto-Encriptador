const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

console.log("Hello World")

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});