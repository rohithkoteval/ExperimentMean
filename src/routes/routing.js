const express = require('express');
const routing = express.Router();
routing.get('/',(req,res) => {
    res.json({ "message": "You are using express.Router class in GET method"});
})
routing.post('/',(req,res) => {
    res.json({ "message": "You are using express.Router class in POST method"});
})
routing.put('/',(req,res) => {
    res.json({ "message": "You are using express.Router class in PUT method"});
})
routing.delete('/',function(req,res){
    res.json({ "message": "You are using express.Router class in DELETE method"});
})
routing.get('/user/:username',function(req,res){
    res.json({ "message": req.params.username});
})
module.exports = routing;
