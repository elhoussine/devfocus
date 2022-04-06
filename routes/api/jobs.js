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
         .then(jobs => res.status(200).json(jobs))
         .catch(err => res.status(404).json({
            nojobsfound: 'No jobs found',
            err: err
         }));
   });

router.get('/:id',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      Job.findById(req.params.id)
         .then(job => res.status(200).json(job))
         .catch(err =>
            res.status(404).json({
               nojobfound: 'No job found with that ID',
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

      newJob.save().then(job => res.status(200).json(job));
   }
);

router.patch("/:id",
   passport.authenticate("jwt", {
      session: false
   }),
   (req, res) => {

      Job.findById(req.params.id)
         .then(job => {
            const {
               errors,
               isValid
            } = validateJobInput(req.body);

            if (!isValid) {
               return res.status(400).json(errors);
            }

            job.company = req.body.company;
            job.title = req.body.title;
            job.status = req.body.status;
            job.dateApplied = req.body.dateApplied;
            job.description = req.body.description;
            job.link = req.body.link;
            job.interviewDate = req.body.interviewDate;
            job.user = req.user.id;

            job.save().then(job => res.status(200).json(job));
         })
         .catch(err =>
            res.status(500).json({
               jobnotupdated: 'There was an error updating the job',
               err: err
            })
         );
   })

router.delete('/:id',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      Job.findByIdAndDelete(req.params.id)
         .then(job =>
            res.status(200).json(job))
         .catch(err =>
            res.status(500).json({
               jobnotdeleted: 'There was an error deleting the job',
               err: err
            })
         );
   });

module.exports = router;