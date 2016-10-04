/**
 * Created by sachinPc on 10/4/2016.
 */
var express = require('express');
var router = express.Router();

router.post('/index', function(req, res){
    res.sendStatus(200);
});
module.exports = router;