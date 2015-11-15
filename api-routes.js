var express = require('express');
var router = express.Router();
var blog = require('./db.js')


router.post('/login',function(req,res){

})

router.post('/blog', function(req,res){
  blog.Post.create(req.body)
  .then(function(post){
    post.date = Date.now()
    return post.save()
  })
  .then(function(post){
    res.send(post)
  })
})

router.get('/blog', function(req,res){
  blog.Post.find()
  .then(function(posts){
    res.json(posts)
  })
})

router.get('/blog/:webTitle',function(req,res){
  blog.Post.find({webTitle: req.params.webTitle})
  .then(function(post){
    res.json(post)
  })
})

router.delete('/blog/:id', function(req,res){
  blog.Post.findById(req.params.id).remove().exec()
  .then(function(post){
    res.json(post);
  })
})

module.exports = router;
