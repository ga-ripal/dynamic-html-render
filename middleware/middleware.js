const express = require("express");
const app = express();
const fs = require("fs");

// to read file
// const readFile = async (file, error) => {
//   console.log("inside read file");
//   fs.readFile("index.html", (err, data) => {
//     if (err) {
//       console.error("err", err);
//     } else {
//       // console.log("dta", fileData);
//       res.writeHead(200, { "Content-Type": "text/html" });
//       // res.write(data);
//       const writableData = res.write(data);
//       console.log("writableData", writableData);
//       const jsonData = JSON.parse(writableData);
//       console.log("jsonData", jsonData);
//     }
//   });
// };

// commbine read file and access data
var readHTMLFile = function(path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, (err, html) => {
    if (err) {
      throw err;
      // callback(err);
    } else {
      callback(null, html);
    }
  });
};

module.exports = {
  // readFile,
  readHTMLFile
};
