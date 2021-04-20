var express = require('express');
var router = express.Router();

let MongoClient = require('mongodb').MongoClient;
let uri = "mongodb+srv://testuser:12345@cluster0.prj3a.mongodb.net/leggio_dough?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

MongoClient.connect(uri, {useUnifiedTopology: true}, (err, client) => {
  if (err) return console.error(err)
    console.log('Connected to db');

    let db = client.db("leggio_dough");
    let Products = db.collection("products");

    router.get('/test', (req, res) => {
      db.collection("products").find.toArray().then(results => {
        console.log(results)
        res.render('test.ejs', {"products": results})
      }).catch(error => console.log(error));
    })
});




//working section with hard coded data
/*

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/products', (req, res) => {
  res.render('products', 
  {"products": [
    {"name": "Tortellini", 
     "quantity": 1,
     "price": 4.00,
     "description": "lkjdakldfkads;fadsj",
     "category": "pasta"},

    {"name": "Farfalle",
     "quantity": 3,
     "price": 3.00,
     "description": "ldalleiadfkalkf",
     "category": "pasta"}],
  "category": "pasta"
  });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/cart', (req, res) => {
  res.render('cart');
});
*/
module.exports = router;
