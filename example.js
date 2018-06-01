const steamprice = require('./index.js');

/*steamprice.getprice(730, 'Clutch Case Key', function(err, data){
    console.log(data.body);
});*/
var items = [
    'Clutch Case Key',
    'Clutch Case'
]
steamprice.getprices(730, items, function(err, data){
    console.log(data);
});

steamprice.getprice(730, 'Clutch Case', function(err,data){
    console.log(data.body);
});