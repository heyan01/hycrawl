let Movie =require('../model').Movie;
let async= require('async');
let debug=require('debug')('crawl:write');
module.exports=function write(movies,callback){
    Movie.create(movies,callback);
    debug(`写入电影`)
};


