//Reqiure
const Event = require('../models/db')
//Functions
//Insert
const insert = (req , res)=>{
    const event = new Event({
        name : req.body.name , 
    });
    event.save((err)=>{
        if (err) throw err;
        res.redirect('/');
    });
}
//ShowAll
const showData  = (req,res)=>{
    Event.find({} , (err , events)=>{
        if (err){
            res.status(404);
            res.send('Page Not Found :/ ')
        }
        res.render('pages/home', {events : events});
    });
}
//DeleteData
const remove =(req , res)=>{
    Event.deleteOne({name : req.params.name} , (err)=>{
        if (err) throw err;
        res.redirect('/');
    });
}
//Export Functions
module.exports = {
    insert,
    showData,
    remove
}