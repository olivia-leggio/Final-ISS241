var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://webserver:webserver@cluster0.prj3a.mongodb.net/leggio_dough?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

/***********************************************************/
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/test', function(req, res, next) {
  client.connect(err => {
    client.db("leggio_dough").collection("products").find().toArray()
      .then(results => {
        console.log(results)
        res.render('test',
        {products: results})
      })
    .catch(error => console.error(error))
    client.close();
    });
});
/***********************************************************/
/*
client.connect(err => {
  let db = client.db("leggio_dough");
  let Products = db.collection("products");
  let Orders = db.collection("orders");
  let OrderItems = db.collection("order_items");
  
  router.get('/', function(req, res, next) {
    res.render('home');
  });


  router.get('/test', function(req, res, next) {
    Products.find().toArray()
      .then(results => {
        console.log(results)
        res.render('test',
        {products: results})
      })
      .catch(error => console.error(error))
  });

  client.close();
});
*/

module.exports = router;
