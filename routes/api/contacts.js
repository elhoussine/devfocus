const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Contact = require('../../models/Contact');
const validateContactInput = require('../../validation/contacts');

router.get('/',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      Contact.find({
            user: req.user.id
         })
         .sort({
            date: -1
         })
         .then(contacts => res.status(200).json(contacts))
         .catch(err => res.status(404).json({
            nocontactsfound: 'No contacts found',
            err: err
         }));
   });

router.get('/:id',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      Contact.findById(req.params.id)
         .then(contact => res.status(200).json(contact))
         .catch(err =>
            res.status(404).json({
               nocontactfound: 'No contact found with that ID',
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
      } = validateContactInput(req.body);

      if (!isValid) {
         return res.status(400).json(errors);
      }

      const newContact = new Contact({
         name: req.body.name,
         company: req.body.company,
         title: req.body.title,
         linkdin: req.body.linkdin,
         email: req.body.email,
         phone: req.body.phone,
         firstContactDate: req.body.firstContactDate,
         responded: req.body.responded,
         meetingDate: req.body.meetingDate,
         thanksFolowUp: req.body.thanksFolowUp,
         user: req.user.id
      });

      newContact.save().then(contact => res.status(200).json(contact));
   }
);

router.patch("/:id",
   passport.authenticate("jwt", {
      session: false
   }),
   (req, res) => {

      Contact.findById(req.params.id)
         .then(contact => {
            const {
               errors,
               isValid
            } = validateContactInput(req.body);

            if (!isValid) {
               return res.status(400).json(errors);
            }

            contact.name = req.body.name;
            contact.company = req.body.company;
            contact.title = req.body.title;
            contact.linkdin = req.body.linkdin;
            contact.email = req.body.email;
            contact.phone = req.body.phone;
            contact.firstContactDate = req.body.firstContactDate;
            contact.responded = req.body.responded;
            contact.meetingDate = req.body.meetingDate;
            contact.thanksFolowUp = req.body.thanksFolowUp;
            contact.user = req.user.id;

            contact.save().then(contact => res.status(200).json(contact));
         })
         .catch(err =>
            res.status(500).json({
               contactnotupdated: 'There was an error updating the contact',
               err: err
            })
         );
   })

router.delete('/:id',
   passport.authenticate('jwt', {
      session: false
   }),
   (req, res) => {
      Contact.findByIdAndDelete(req.params.id)
         .then(contact =>
            res.status(200).json(contact))
         .catch(err =>
            res.status(500).json({
               contactnotdeleted: 'There was an error deleting the contact',
               err: err
            })
         );
   });

module.exports = router;