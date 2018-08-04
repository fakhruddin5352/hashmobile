let serviceKey = require('../firebase-config/firebase.service-key.json'); // The service key of the firebase project
let firebaseConfig = require('../firebase-config/firebase.config.json'); // The config for the firebase project
let FirebaseAuthNode = require('firebase-auth-node');

let express = require('express');
let router = express.Router();

let firebaseAuth = new FirebaseAuthNode(firebaseConfig, serviceKey);
  
router.get('/' , function(req,res,next){
    console.log('email ', req.query.email);
    firebaseAuth.signIn(req.query.email, req.query.password)
        .then(obj=>{
            console.log(obj);
            res.send(obj);
        })
        .catch(err=>res.status(500).send(err));
});
module.exports = router;