var express = require('express');
var router = express.Router();
const userModel = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  const{username,email,pwd}=req.body;
  // console.log(req.body);
  const User= new userModel(req.body);
  userModel.findOne({email:email})
      .then(data=>{
        if(data) {
          res.send('Такой пользователь уже существует!');
        } else {
          User.save()
              .then((data2)=>{

                console.log(`Пользователь сохранен! ${data2}`);
                res.json(JSON.stringify(data2));
              })
              .catch((err)=>console.log(err));
        }
      });
  // res.send('respond with a resource');
});



module.exports = router;
