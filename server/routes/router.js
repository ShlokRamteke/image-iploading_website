const express = require("express");
const router = new express.Router();
const conn = require("../db/connection");
const multer = require("multer");

//img storage config
let imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

//img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(null, Error("Only image is allowed"));
  }
};

let upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

//register userdata
router.post("/register", upload.single("photo"), (req, res) => {
  console.log(req.body);
});

module.exports = router;
