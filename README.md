# Steam-price-API
This is a module developed by OlleThunberg that lets you easily check in-game items values.

**Install**
```js
npm install steam-price-api --save
```

**Import**
```js
const steamprice = require('steam-price-api');
```

## Methods
```js
//For one item
steamprice.getprice(appid, itemname, currency);
```
- `appid` : The games appid. (730 = CSGO)
- `itemname` : The items market name. (Example: Clutch Case)
- `currency` : The currency in **numbers**. (1 = USD);

## Examples

### Get One Item: 
```js
steamprice.getprice(730, 'Clutch Case', '1').then(data => {
    console.log(data);
}).catch(err => console.log(err));
```
**Output**
```json
{ "success": true,
  "lowest_price": "$0.21",
  "volume": "31,939",
  "median_price": "$0.21" }
```

---


### Get Multiple Items:
```js
const items = [
    'Clutch Case Key',
    'Clutch Case'
]
steamprice.getprices(730, items, '1').then(data => {
    console.log(data);
}).catch(err => console.log(err));
```
**Output**
```json
{ "success": true,
  "lowest_price": "$2.56",
  "volume": "3,110",
  "median_price": "$2.56" }
{ "success": true,
  "lowest_price": "$0.21",
  "volume": "31,939",
  "median_price": "$0.21" }
```
## License
MIT License

Copyright (c) 2018 Olle Thunberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.