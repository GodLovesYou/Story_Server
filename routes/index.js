const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path")
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: path.join(__dirname , 'uploads'),
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
    res.send("http://127.0.0.1:3000/routes/uploads/"+req.files[0].originalname)
})

module.exports = router;
