const { User, Thoughts } = require('../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      const result = await User.find({})
      res.status(200).json({result})
    } catch(err){
      console.log(err)
      res.status(400).json({err} )
    }
  });


  router.get('/:id', async (req, res) => {
    try {
      const result = await User.findById(req.body.userId).populate({path: 'thoughts'})
      res.status(200).json({result})
    } catch(err){
      console.log(err)
      res.status(400).json({err} )
    }
  });


  router.post('/', async (req, res) => {
    try {
      const newUser = await User.create(req.body)
      res.status(200).json({newUser})
    } catch(err){
      console.log(err)
      res.status(400).json({err} )
    }
  });

  router.put('/:id', async (req, res) => {
    try{
        const updateUser = await User.findByIdAndUpdate(
            req.body.userId,
            req.body,
            {new: true}
            )
        res.status(200).json({updateUser})
    } catch(err){
        console.log(err)
        res.status(400).json({err})
    }
  })

  router.delete('/:id', async (req, res) => {
    try{
        const deleteUser = await User.findByIdAndDelete(
            req.body.userId,
            )
        res.status(200).json({deleteUser})
    } catch(err){
        console.log(err)
        res.status(400).json({err})
    }
  })

  module.exports = router