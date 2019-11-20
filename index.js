const firebase = require('firebase'); 
const express = require('express'); 
const User = require('../models/user') 
const router = express.Router(); 
 
/* GET home page. */ 
router.get('/', function(req, res, next) { 
  res.render('index', { title: 'Express' }); 
}); 
 
/* GET home page. */ 
router.get('/oi', function(req, res, next) { 
  res.render('oi', { title: 'Express' }); 
}); 
 
/* GET home page. */ 
router.get('/venda', function(req, res, next) { 
  res.render('venda', { title: 'Express' }); 
});  
 
router.get('/quemsomos', function(req, res, next) { 
  res.render('quemsomos', {title: 'Quem somos'}); 
}); 
 
router.get('/keyword', function(req, res, next) { 
  res.render('keyword', {title: 'Keyword'}); 
}); 
 
router.get('/index', function(req, res, next) { 
  res.render('index', {title: 'Express'}); 
}); 
 
router.get('/amargasaurus', function(req, res, next) { 
  res.render('amargasaurus', {title: 'Amargasaurus'}); 
}); 
 
router.get('/baryonyx', function(req, res, next) { 
  res.render('baryonix', {title: 'Baryonyx'}); 
}); 
 
router.get('/dilong', function(req, res, next) { 
  res.render('dilong', {title: 'Dilong'}); 
}); 
 
router.get('/guanlong', function(req, res, next) { 
  res.render('guanlong', {title: 'Guanlong'}); 
}); 
 
router.get('/kosmoceratops', function(req, res, next) { 
  res.render('kosmoceratops', {title: 'Kosmoceratops'}); 
}); 
 
router.get('/create', function(req, res, next) { 
  res.render('create', {title: 'Cadastro'}); 
});  
 
/* GET home page. */ 
router.post('/create', (req, res) => { 
    const user1 = req.body.user; 
    console.log(user1);
    User.create(user1).then((id) => { 
      console.log ("entrou"); 
      console.log(id);
      
      res.redirect('/create'); 
      console.log(id); 
    }).catch((error) => { 
      console.log(error); 
      res.redirect('/error'); 
    }); 
});  
 
/* GET home page. */ 
// router.post('/oi', function(req, res, next) => { 
//   console.log("AAAAAHHHHH MILLENA ESTEVE AQUI"); 
//   const oi = req.body.user 
//   console.log(oi); 
   
//   const userData = req.body.user; 
//   firebase.auth().signInWithEmailAndPassword(userData.email, userData.password).then((userID) => { 
//     console.log(userID.user.uid); 
//     res.redirect('/');  
//   }); 
// }); 
module.exports = router; 
