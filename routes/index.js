var express = require('express');
var router = express.Router();

let MongoClient = require('mongodb').MongoClient;
let uri = "mongodb+srv://testuser:12345@cluster0.prj3a.mongodb.net/leggio_dough?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
/*
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
*/



//working section with hard coded data

router.get('/', (req, res) => {
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
     "category": "pasta"},

    {"name": "Fusilli",
     "quantity": 3,
     "price": 3.00,
     "description": "ldalleiadfkalkf",
     "category": "pasta"},
    
    {"name": "Garganelli",
     "quantity": 3,
     "price": 3.00,
     "description": "ldalleiadfkalkf",
     "category": "pasta"},

    {"name": "Ravioli",
     "quantity": 3,
     "price": 3.00,
     "description": "ldalleiadfkalkf",
     "category": "pasta"},
    
    {"name": "Sacchetti",
     "quantity": 3,
     "price": 3.00,
     "description": "ldalleiadfkalkf",
     "category": "pasta"}],
  "category": "pasta"
  });
});

router.get('/bread', (req, res) => {
  res.render('products', 
  {"products": [
    {"name": "Baguette",
     "quantity": 2,
     "price": 3.00,
     "description": "alaewkefjeiao",
     "category": "bread"}],
   "category": "bread"
  });
});

router.get('/pastries', (req, res) => {
  res.render('products', 
  {"products": [
    {"name": "Croissant",
     "quantity": 6,
     "price": 2.00,
     "description": "alaewkefjeiao",
     "category": "pastries"},

    {"name": "Pain au Chocolat",
     "quantity": 6,
     "price": 2.00,
     "description": "alaewkefjeiao",
     "category": "pastries"},
    
    {"name": "Macarons",
     "quantity": 5,
     "price": 5.00,
     "description": "alaewkefjeiao",
     "category": "pastries"}],
   "category": "pastries"
  });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/cart', (req, res) => {
  res.render('cart');
});

module.exports = router;