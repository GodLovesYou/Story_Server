const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path")
const url = require("url")
const multer  = require('multer');
var timestamp=new Date().getTime();
const storage = multer.diskStorage({
    destination: path.join('C://uploads//'+timestamp),
    filename: (req , file , cb ) => {
        cb( null, file.originalname);
    }
})
const upload = multer({storage:storage});

/* GET home page. */
router.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,username');
    next()
})
router.post('/file_upload',upload.any(), function (req, res) {
    console.log(req.files[0].path);  // 上传的文件信息
    const des_file = "./upload/" + req.files[0].originalname;
    res.send("http://127.0.0.1:3000/image/"+timestamp+"/"+req.files[0].originalname)
})
router.get('/image/*', function (req, res) {
    console.log(req.url.split("/"))
    let bookNumber = req.url.split("/")[2];
    let imgId = req.url.split("/")[3];
    fs.readFile("C://uploads//"+bookNumber+"//"+imgId,'binary',function(err,file){
        if(err){
            console.log(err);
            return ;
        }else{
            res.write(file,'binary');
            res.end()
        }
    });
})

module.exports = router;
