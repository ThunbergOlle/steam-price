var request = require('request');

exports.getprice = (appid, itemname, currency) => {
    return new Promise((reject, resolve) => {
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
        }, (err, res) => {
            if(err) reject(err);
            if(res.body.success === false) reject("Request wasn't successful. Try checking your variables. Message: " + JSON.stringify(body));
            resolve(res.body);
        });
    })

}
exports.getprices = (appid, itemnames, currency) => {
    return new Promise((reject, resolve) => {
        if (typeof currency !== 'number') {
            currency = 1;
        } 
        if(typeof itemnames != 'object'){
            if (typeof itemnames == 'string') {
            itemnames = [itemnames];
        }
        }
        var tmpres = [];
        itemnames.forEach(function(itemname) {    
            request({
            uri: '/market/priceoverview',
            baseUrl: 'http://steamcommunity.com/',
            json: true,
            qs: {
                currency: currency,
                appid: appid,
                market_hash_name: itemname
            }
        }, (err, res, body) => {
            if(err) reject(err);
            tmpres.push(body);
            if(tmpres.length == itemnames.length){
                resolve(tmpres);
            }
        });
        });
    });
    
}
