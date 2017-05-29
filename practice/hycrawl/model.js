let mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201701crawl');
let MovieScheme=new mongoose.Schema({
    name:String,
    url:String
});
let Movie=mongoose.model('Movie',MovieScheme);
exports.Movie=Movie;