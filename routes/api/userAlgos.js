const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const UserAlgo = require('../../models/UserAlgo');
const validateUserAlgoInput = require('../../validation/userAlgos');

router.get('/',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      UserAlgo.find({
            user: req.user.id
         })
         .sort({
            date: -1
         })
         .then(userAlgos => res.status(200).json(userAlgos))
         .catch(err => res.status(404).json({
            nouserAlgosfound: 'No algorithms found for this user',
            err: err
         }));
   });

router.get('/:id',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      UserAlgo.findById(req.params.id)
         .then(userAlgo => res.status(200).json(userAlgo))
         .catch(err =>
            res.status(404).json({
               noalgofound: 'No algorithm found with that ID',
               err: err
            })
         );
   });

router.post('/new',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      const {
         errors,
         isValid
      } = validateUserAlgoInput(req.body);

      if (!isValid) {
         return res.status(400).json(errors);
      }

      const newUserAlgo = new UserAlgo({
         user: req.user.id,
         algo: req.body.algo,
         completed: req.body.completed,
         rating: req.body.rating
      });

      newUserAlgo.save().then(userAlgo => res.status(200).json(userAlgo));
   }
);

router.patch("/:id",
   passport.authenticate("jwt", {
      session: false
   }),
   (req, res) => {

      UserAlgo.findById(req.params.id)
         .then(userAlgo => {
            const {
               errors,
               isValid
            } = validateUserAlgoInput(req.body);

            if (!isValid) {
               return res.status(400).json(errors);
            }
            userAlgo.user = req.user.id;
            userAlgo.algo = req.body.algo;
            userAlgo.completed = req.body.completed;
            userAlgo.rating = req.body.rating;

            userAlgo.save().then(userAlgo => res.status(200).json(userAlgo));
         })
         .catch(err =>
            res.status(500).json({
               algonotupdated: 'There was an error updating the user algorithm',
               err: err
            })
         );
   })

router.delete('/:id',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      UserAlgo.findByIdAndDelete(req.params.id)
         .then(userAlgo =>
            res.status(200).json(userAlgo))
         .catch(err =>
            res.status(500).json({
               algonotdeleted: 'There was an error deleting the user algorithm',
               err: err
            })
         );
   });

module.exports = router;