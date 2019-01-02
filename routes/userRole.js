const express = require('express');
const router = express.Router();
const connection = require('./db');

/* GET users listing. */
router.get('/', function(req, res) {
    let sql = `SELECT * from UserRoles`;
    let jsonStr={
        errorCode:"0x0000",
        content:null
    };
    connection.query(sql,function(err,result){
        if(err){
            jsonStr.errorCode="0x0001"
            res.json(jsonStr);
        }else{
            jsonStr.content=result;
            res.json(jsonStr);
        }
    })
});

router.post('/', function(req, res, next) {
    let Mail = req.body.Mail;
    let Phone = req.body.Phone;
    let Address = req.body.Address;
    let LoginName = req.body.LoginName;
    let sql = `UPDATE Users SET`;
    if (Mail!==undefined){
        sql += ` Mail = ` + Mail;
    }
    if (Phone!==undefined){
        sql += ` Phone = ` + Phone;
    }
    if (Address!==undefined){
        sql += ` Address = ` + Address;
    }
    if (LoginName!==undefined) {
        sql += ` LoginName = ` + LoginName;
    }
    let jsonStr={
        errorCode:"0x0000",
        content:null
    };
    connection.query(sql,function(err,result){
        if(err){
            jsonStr.errorCode="0x0001"
            res.json(jsonStr);
        }else{
            jsonStr.content=result;
            res.json(jsonStr);
        }
    })
});

router.put('/', function(req, res) {
    let Name = req.body.Name;
    let LoginPwd = req.body.LoginPwd;
    let Mail = req.body.Mail;
    let RegisterTime = req.body.RegisterTime;
    let Phone = req.body.Phone;
    let Address = req.body.Address;
    let LoginName = req.body.LoginName;
    let UserRoleId = req.body.UserRoleId;
    let sql=`INSERT INTO Users (Name, LoginPwd, Mail, RegisterTime, Phone, Address, LoginName, UserRoleId) 
    VALUES(${Name},${LoginPwd},${Mail},${RegisterTime},${Phone},${Address},${LoginName},${UserRoleId},)`;
    let jsonStr={
        errorCode:"0x0000",
        content:null
    };
    connection.query(sql,function(err,result){
        if(err){
            jsonStr.errorCode="0x0001"
            res.json(jsonStr);
        }else{
            jsonStr.content=result;
            res.json(jsonStr);
        }
    })
});

router.delete('/', function(req, res) {
    let Id = req.body.Id;
    let sql=`DELETE FROM Users where Id = ${Id}`;
    let jsonStr={
        errorCode:"0x0000",
        content:null
    };
    connection.query(sql,function(err,result){
        if(err){
            jsonStr.errorCode="0x0001"
            res.json(jsonStr);
        }else{
            jsonStr.content=result;
            res.json(jsonStr);
        }
    })
});



module.exports = router;
