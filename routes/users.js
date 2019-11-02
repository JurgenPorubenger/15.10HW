const express = require('express');
const router = express.Router();
const Ajv = require('ajv');
const userModel = require('../model/user');
const userSchema = require('../schemas/userSchema');
const ajv = new Ajv();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/registration', function(req, res, next) {
    const{firstName,lastName, email,pwd,dob,phone}=req.body;
    console.log(req.body);
    const validate = ajv.compile(userSchema);
    const valid = validate({
        firstName: firstName,
        lastName: lastName,
        email: email,
        pwd: pwd,
        dob:dob,
        phone:phone
    });
    if(!valid){
        const { errors } = validate;
        const result = {
            status: 'invalid data',
            payload: { errors },
        };
        console.log(result.payload.errors);
        res.json(result);
    } else {
        const User = new userModel({
                firstName: firstName,
                lastName: lastName,
                email: email,
                pwd: pwd,
                dob:dob,
                phone:phone
            });
        User.pwd = User.reversePassword();
        User.save()
            .then(data => {
                console.log(data+'SAVE');
                res.json(JSON.stringify(data))
            })
            .catch((err) => console.log(err));    }
});

router.post('/login', function(req, res, next) {
    const{firstName,pwd}=req.body;

    function comparePwd(loginPwd,dbPwd) {
        if (loginPwd.split("").reverse().join("") === dbPwd) {
            return true;
        } else {
            return false;
        }
    }

    userModel.findOne({firstName:firstName})
        .then(data=>{
            console.log(`${(data)} jjj`);
            if(data) {
                console.log('DATA'+data);
               if (comparePwd(pwd, data.pwd)){
                   res.json(JSON.stringify(data));
               } else {
                   res.json(JSON.stringify({massage:'PWDs not match!'}));
               }
            } else {
                res.json(JSON.stringify({massage:'You need registration'}));
            }
        });
});




module.exports = router;
