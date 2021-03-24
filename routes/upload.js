var router =require("express").Router()
var multer  = require('multer')
var path =require("path")
 

var db =require("../models")
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


router.post('/profile', upload.single('avatar'),   function (req, res, next) {
    console.log(req.file)
  
    db.User.updateOne({_id:req.body.userId},{$set:{profilePic:req.file.originalname}})
    .then(function(results){
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.redirect("/profile")
    })
  })


  module.exports =router