let express=require('express');
let path=require('path');
let Movie =require('./model').Movie;
let app=express();
app.listen(8080);
app.use(express.static(path.resolve('node_modules')));
app.set('view engine','ejs');

app.get('/',function (req,res) {
    Movie.find({},function (err,Movie) {
        res.render('index',{Movie})
    })
})
