const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Algo = require('../../models/Algorithm');

router.get('/',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      Algo.find()
         .sort({
            date: -1
         })
         .then(algos => res.status(200).json(algos))
         .catch(err => res.status(404).json({
            noalgosfound: 'No algorithms found',
            err: err
         }));
   });

router.get('/:id',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      Algo.findById(req.params.id)
         .then(algo => res.status(200).json(algo))
         .catch(err =>
            res.status(404).json({
               noalgofound: 'No algorithm found with that ID',
               err: err
            })
         );
   });

module.exports = router;