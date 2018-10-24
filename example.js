const steamprice = require('./index.js');

/*steamprice.getprice(730, 'Clutch Case Key', function(err, data){
    console.log(data.body);
});*/
steamprice.getprice("440", 'Refined Metal', function(err,data){
    if(err) throw err;
});