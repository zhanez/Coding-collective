var router =require("express").Router()
var multer  = require('multer')
var path =require("path")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../client/public/uploadImages"))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   console.log(path.join(__dirname,"../client/public/uploadImages"))
  var upload = multer({ storage: storage })


router.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(req.file)
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.redirect("/profile")
  })


  module.exports =router