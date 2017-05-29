let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
let debug=require('debug')('crawl:read');
module.exports= function read(url,cb) {
    request({url,encoding:null},function (err,res,body) {
        body = iconv.decode(body,'gbk');
        let $ = cheerio.load(body);
        let movies = [];
        $('.keyword .list-title').each(function (index,item) {
            let $this = $(item);
            let movie = {name:$this.text(),url:$this.attr('href')};
            movies.push(movie);
            debug(`读到电影:${movie.name}`)
        });
        cb(err,movies);
    })
};
