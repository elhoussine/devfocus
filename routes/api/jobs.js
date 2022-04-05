const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Job = require('../../models/Job');
const validateJobInput = require('../../validation/jobs');

router.get('/',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      Job.find({
            user: req.user.id
         })
         .sort({
            date: -1
         })
         .then(jobs => res.json(jobs))
         .catch(err => res.status(404).json({
            nojobsfound: 'No jobs found'
         }));
   });

router.get('/:id',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      Job.findById(req.params.id)
         .then(job => res.json(job))
         .catch(err =>
            res.status(404).json({
               nojobfound: 'No job found with that ID'
            })
         );
   });

router.post('/',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      const {
         errors,
         isValid
      } = validateJobInput(req.body);

      if (!isValid) {
         return res.status(400).json(errors);
      }

      const newJob = new Job({
         company: req.body.company,
         title: req.body.title,
         status: req.body.status,
         dateApplied: req.body.dateApplied,
         description: req.body.description,
         link: req.body.link,
         interviewDate: req.body.interviewDate,
         user: req.user.id
      });

      newJob.save().then(job => res.json(job));
   }
);

module.exports = router;