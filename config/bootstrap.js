/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

    // var person = {"name": "Martin Choy", "age":"23", "id":1};

    // Person.create(person).exec( function(err, model) {});

    // person = {"name": "Sally Yeung", "age":"22", "id":2};

    // Person.create(person).exec( function(err, model) {});

    // var user = {"username": "admin", "password":"123456", "id":1}

    // User.create(user).exec( function (err, model)  {});

    // user = {"username": "boss", "password":"123456", "id":2}

    // User.create(user).exec( function (err, model)  {});

    cb();
};
