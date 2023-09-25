const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require("dotenv").config();
const connectDB = require("./config/ConnectDB");
const {
  dataAffiliateStat,
  dataProduct,
  dataOverallStat,
  dataProductStat,
  dataTransaction,
  dataUser,
} = require("./data");
/*CONFIGURATION*/
const app = express();
connectDB();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*Routes*/
app.use("/auth", require("./routes/auth"));
app.use("/client", require("./routes/client"));
app.use("/general", require("./routes/general"));
app.use("/management", require("./routes/management"));
app.use("/sales", require("./routes/sales"));

/*MONGOOSE SETUP*/ /*connecct db*/
const PORT = process.env.PORT || 3000;
const Product = require("./models/Product");
const ProductStat = require("./models/ProductStat");
const Transaction = require("./models/Transaction");
const User = require("./models/User");
const AffiliateStat = require("./models/AffiliateStat");
const OverallStat = require("./models/OverallStat");
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  // AffiliateStat.insertMany(dataAffiliateStat);
  // OverallStat.insertMany(dataOverallStat);
  // Product.insertMany(dataProduct);
  // ProductStat.insertMany(dataProductStat);
  // Transaction.insertMany(dataTransaction);
  // User.insertMany(dataUser);
});
// FORGOT PASSWORD
app.post("/forgot-password", (req, res) => {
  const { email } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.send({ Status: "User not existed" });
    }
    const token = jwt.sign({ id: user._id }, "jwt_secret_key", {
      expiresIn: "1d",
    });
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "youremail@gmail.com",
        pass: "your password",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "user email@gmail.com",
      subject: "Reset Password Link",
      text: `http://localhost:5173/reset_password/${user._id}/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.send({ Status: "Success" });
      }
    });
  });
});
app.get("/", (req, res) => res.send("test"));
//RESET PASSWORD
app.post("/reset-password/:id/:token", (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  jwt.verify(token, "jwt_secret_key", (err, decoded) => {
    if (err) {
      return res.json({ Status: "Error with token" });
    } else {
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          UserModel.findByIdAndUpdate({ _id: id }, { password: hash })
            .then((u) => res.send({ Status: "Success" }))
            .catch((err) => res.send({ Status: err }));
        })
        .catch((err) => res.send({ Status: err }));
    }
  });
});
