const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const path = require("path");
const readHTMLFile = require("../../middleware/middleware").readHTMLFile;
const apiHelper = require("../../helpers/api.helper");
const ERROR_LITERALS = require("../../constants/error-literals.constant");

router.post("/email", async (req, res, next) => {
  try {
    const body = req.body;
    //get dat afrom file and replace key with values
    let str = "";
    for (const key in body) {
      const regex = new RegExp(key, "g");
      str += str.replace(regex, body[key]);
    }
    //node mailer logic
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ripal.patel@green-apex.com",
        pass: "krishn@109"
      }
    });
    if (transporter) {
      //read html file and acccess data
      readHTMLFile(
        path.join(__dirname, "..", "..", "public", "email.html"),
        (err, html) => {
          const template = handlebars.compile(html);
          const replacements = {
            username: "req.body.FULL_NAME"
          };
          const htmlToSend = template(replacements);
          const mailOptions = {
            from: "ripal.patel@green-apex.com",
            to: req.body.EMAIL,
            subject: "Sending Email using Node.js",
            html: htmlToSend,

            text: "That was easy!"
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              console.log("Email sent: " + info.response);
              return apiHelper.success(
                res,
                {
                  transporter
                },
                ERROR_LITERALS.MAIL.SENT_MAIL
              );
            }
          });
        }
      );
    }
  } catch (err) {
    return apiHelper.failure(res, [], ERROR_LITERALS.CATCH_ERROR.ERR);
  }
});

module.exports = router;
