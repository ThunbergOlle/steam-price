const steamprice = require('./index.js');

/*steamprice.getprice(730, 'Clutch Case Key', function(err, data){
    console.log(data.body);
});*/
// steamprice.getprice("730", 'Clutch Case Key', '1').then((data) => {
//     console.log(data);
// }).catch(err => console.log(err));
const items = [
    'Clutch Case Key',
    'Clutch Case'
]
steamprice.getprices(730, items, '1').then(data => {
    console.log(data);
}).catch(err => console.log(err));
// steamprice.getprice(730, 'Clutch Case', '1').then(data => {
//     console.log(data);
// }).catch(err => console.log(err));