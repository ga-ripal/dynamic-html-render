const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8080;
const path = require("path");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
//access all routes
app.use(require("./routes/index.route"));
//access public folder
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is starting at ${PORT}
      http://localhost:${PORT}/`);
});
