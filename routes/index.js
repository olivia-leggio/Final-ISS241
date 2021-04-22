var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'elenor.okuneva@ethereal.email',
      pass: 'zNQspehAbZmy2tbGq7'
  }
});

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

    {"name": "Pain-au-Chocolat",
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

router.post('/cart', (req, res) => {
  console.log(req.body);
  let options = {
    from: 'elenor.okuneva@ethereal.email',
    to: 'zach@leggiodough.com',
    subject: 'New order from ' + req.body.name,
    html: '<ul><li>'+ req.body.email +'</li><li>'+ req.body.info +'</li></ul>'
  };
  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.log(error);
    }
    else {
      console.log('email sent: ' + info.response);
    }
  });

  res.redirect('/checkout');
});

router.get('/checkout', (req, res) => {
  res.render('checkout');
});

module.exports = router;