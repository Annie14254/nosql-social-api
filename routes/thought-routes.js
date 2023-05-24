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
      const newThought = await Thoughts.create(req.body)
      res.status(200).json({newThought})
    } catch(err){
      console.log(err)
      res.status(400).json({err} )
    }
  });

  router.put('/:id', async (req, res) => {
    try{
        const updateThought = await Thoughts.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
            )
        res.status(200).json({updateThought})
    } catch(err){
        console.log(err)
        res.status(400).json({err})
    }
  })

  router.delete('/:id', async (req, res) => {
    try{
        const deleteThought = await Thoughts.findByIdAndDelete(
            req.params.id,
            )
        res.status(200).json({deleteThought})
    } catch(err){
        console.log(err)
        res.status(400).json({err})
    }
  })

  router.post("/:thoughtId/reactions", async (req, res) => {
    try {
      // add to reactions
      const addReaction = await Thoughts.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$addToSet: {reactions: req.body}},
        {new: true}
        )
      res.status(200).json({addReaction})

    } catch (err){
      console.log(err)
      res.status(400).json({err})
    }
  })

  router.delete("/:thoughtId/reactions/:reactionId", async (req, res) => {
    try {

      // delete from reactions
      const deleteReaction = await Thoughts.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$pull: {reactions: {reactionId: req.params.reactionId}}},
        {new: true}
        )
      res.status(200).json({deleteReaction})

    } catch (err){
      console.log(err)
      res.status(400).json({err})
    }
  })

  module.exports = router