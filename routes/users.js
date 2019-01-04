const express = require('express');
const router = express.Router();
const sd = require('silly-datetime');
const connection = require('./db');

/* GET users listing. */
router.get('/', function(req, res) {
    let UserRoleId = req.body.UserRoleId;
    let sql = `SELECT a.Id,a.Name,a.LoginPwd,a.Mail,a.RegisterTime,a.Phone,a.Address,a.LoginName,a.Phone,b.Name FROM Users  a,UserRoles  b WHERE a.UserRoleId=b.Id`;
    if (UserRoleId!==undefined){
        sql += `AND UserRoleId = ` + UserRoleId;
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
    let param = JSON.parse(Object.keys(req.body));
    let Name = param.name;
    let LoginPwd = param.password;
    let Mail = param.email;
    let Phone = param.phone;
    let Address = param.address;
    let LoginName = param.username;
    let sex = param.sex;
    let card = param.card;
    let birthday = sd.format(new Date(param.birth), 'YYYY-MM-DD');;
    let datetime=sd.format(new Date(), 'YYYY-MM-DD HH:mm');
    let sql=`INSERT INTO Users (Name, LoginPwd, Mail, RegisterTime, Phone, Address, LoginName, card, sex, birth ) 
    VALUES('${Name}','${LoginPwd}','${Mail}','${datetime}','${Phone}','${Address}','${LoginName}','${card}','${sex}','${birthday}')`;
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

/* GET home page. */
router.post('/login', function (req, res) {
    let jsonStr={
        errorCode:"0x0000",
        content:null
    };
    let sql = "select * from users";
    let params = JSON.parse(Object.keys(req.body));
    let username = params.username;
    let password = params.password;
    connection.query(sql, function (err, result) {
        if (err) {
            jsonStr.errorCode = "0x0001"
            jsonStr.content = null
            res.json(jsonStr)
        } else {
            jsonStr.content = result
            res.json(jsonStr)
        }
    })
})


module.exports = router;
