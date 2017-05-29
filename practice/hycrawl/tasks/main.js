let read=require('./read');
let write =require('./write');
let async =require('async');
let debug=require('debug')('crawl:main');
let url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
function start() {
    async.waterfall([
        function (callback) {
        read(url,callback)
    },
        function (movies,callback) {
            write(movies,callback)
        }
    ],function () {
        debug('全部任务完成');
    })
}

start()
