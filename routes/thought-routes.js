const { User, Thoughts } = require('../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      const result = await Thoughts.find({})
      res.status(200).json({result})
    } catch(err){
      console.log(err)
      res.status(400).json({err} )
    }
  });


  router.get('/:id', async (req, res) => {
    try {
      const result = await Thoughts.findById(req.params.id)
      res.status(200).json({result})
    } catch(err){
      console.log(err)
      res.status(400).json({err} )
    }
  });


  router.post('/', async (req, res) => {
    try {
      const newUser = await Thoughts.create(req.body)
      res.status(200).json({newUser})
    } catch(err){
      console.log(err)
      res.status(400).json({err} )
    }
  });

  router.put('/:id', async (req, res) => {
    try{
        const updateUser = await Thoughts.findByIdAndUpdate(
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
        const deleteUser = await Thoughts.findByIdAndDelete(
            req.body.userId,
            )
        res.status(200).json({deleteUser})
    } catch(err){
        console.log(err)
        res.status(400).json({err})
    }
  })

  module.exports = router