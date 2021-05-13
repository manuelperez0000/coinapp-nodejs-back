var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/api/:cant', (req, res)=> {
  var cant = req.params.cant
  fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${cant}&convert=usd`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            'X-CMC_PRO_API_KEY':'8c93e619-76d1-4732-b976-55eb10508ffc'
        }
    })
    .then((res)=>{
        return res.json();
    })
    .then((criptos)=>{
      res.json(criptos.data);
    })
    .catch((error)=> {
        console.log('ERROR: Request failed:', error);
    });
}); 
module.exports = router;
