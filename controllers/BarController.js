const db = require('../models/Bars');


module.exports = {
    //find all movies
    findAll: function(req, res) {
        // console.log('i am finding all bars')
        db
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //find movie by id
    findById: function(req, res) {
        db.Bars
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //create movie
    create: function(req, res) {
        // console.log('i am in the create route')
        db
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        // console.log('in the find one route')
        db
        .findOne({urlName: req.params.urlName})
        .then(dbModel => {
            // console.log(dbModel)
            return res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    },
    findBoth: function(req, res) {
        // console.log(req)
        db
        .find(
            { $and: [ {urlName: req.params.urlName}, {dayOfWeek: req.params.dayOfWeek}]}
        )
        .then(dbModel => res.json(dbModel))
    },
    //update movie
    update: function(req, res) {
        console.log(req.body)
        db
            .findOneAndUpdate({ urlName: req.params.urlName }, { $push: { posts: {username: req.body.username, time: req.body.time, date: req.body.date, dayOfWeek: req.body.dayOfWeek, formattedDate: req.body.formattedDate}}})
            .then(dbModel => {
                console.log(dbModel);
                res.json(dbModel)})
            .catch(err => res.status(422).json(err));
    },
    //delete movie
    delete: function(req, res) {
        db.Bars
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
