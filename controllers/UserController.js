const db = require('../models/UserTable');


module.exports = {
    //find all movies
    findAll: function(req, res) {
        db
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //find movie by id
    findById: function(req, res) {
        db.Users
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        db
        .findOne({username: req.params.username})
        .then(dbModel => {
            console.log(dbModel)
            return res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    },
    // find by username 
    //create movie
    create: function(req, res) {
        console.log('i am in the create route')
        db
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //update movie
    update: function(req, res) {
        db.Users
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //delete movie
    delete: function(req, res) {
        db.Users
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
