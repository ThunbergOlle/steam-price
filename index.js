var request = require('request');

exports.getprice = function(appid, itemname, callback, currency){
   
    if (typeof currency !== 'number') {
        currency = 1;
    } 

    request({
        uri: '/market/priceoverview',
        baseUrl: 'http://steamcommunity.com/',
        json: true,
        qs: {
            currency: currency,
            appid: appid,
            market_hash_name: itemname
        }
    }, function(err, res, body){
        if(err) callback(err);
        if(body.success === false) callback("Request wasn't successful. Try checking your variables. Message: " + JSON.stringify(body));
        callback(null, res, body);
    });
}
exports.getprices = function(appid, itemname, callback, currency){
    if (typeof currency !== 'number') {
        currency = 1;
    } 
    if(typeof itemname != 'object'){
        if (typeof itemname == 'string') {
        itemname = [itemname];
    }
    }
    var tmpres = {};
    itemname.forEach(function(itemname) {    
        request({
        uri: '/market/priceoverview',
        baseUrl: 'http://steamcommunity.com/',
        json: true,
        qs: {
            currency: currency,
            appid: appid,
            market_hash_name: itemname
        }
    }, function(err, res, body){
        if(err) callback(err);
        tmpres[itemname] = body;   
        if(Object.keys(tmpres).length == itemname.length){
            callback(tmpres);
        }
    });
    });
}
