/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    login: function (req, res) {
        if (req.method == "GET")
            return res.view('user/login');
        else {
            User.findOne({username:req.body.username})
            .exec( function (err, user) {

                if (user == null) 
                    return res.send("No such user");
                
                if (user.password != req.body.password) 
                    return res.send("Wrong Password");
                
                req.session.username = req.body.username; 
                req.session.gaga = '222';
                req.session.baba = '33';  
                    return res.json(req.session);
            });
        }
    },
    showSupervisors: function (req, res) {
        User.findOne(req.params.id).populateAll().exec( function (err, model) {

          return res.json(model);

        });
    },
    show22: function( req, res) {

        User.findOne(req.params.id).populateAll({age:22}).exec( 
            function (err, model) {
        
            if (model == null) return res.redirect("/");
            
            console.log(model.supervises.length);

            return res.json(model.supervises);

        });
    },
    addSupervisee: function (req, res) {

        User.findOne(req.params.id).exec( function (err, model) {

            if (model !== null) {
                model.supervises.add(req.query.pid);
                model.save(function(err, model) {
                    if (err) return res.send("Already added");

                    return res.send("Supervisee added.");
                });
            }
            else {
                return res.send("User not found!");
            }
        })
    },
    removeSupervisee: function (req, res) {

        User.findOne(req.params.id).exec( function (err, model) {

            if (model !== null) {
                model.supervises.remove(req.query.pid)
                model.save();
                return res.send("Supervisee removed!");
            }
            else {
                return res.send("User not found!");
            }
        })
    
    }
};

