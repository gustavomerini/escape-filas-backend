var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('Hello World', { title: 'Express' });
});

module.exports = router;

// com esse código, ao acessar http://localhost:3000, veremos que nosso backend está rodando 
// e uma mensagem de hello world será mostrada
