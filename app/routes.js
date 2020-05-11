const express = require('express'),
 router =express.Router(),
 controlHome = require('./controller/home.controller');
module.exports=router;

router.get('/' , controlHome.showData);
router.get("/home/:name/remove" , controlHome.remove);
router.post('/home' , controlHome.insert);

