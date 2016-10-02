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
                    return res.json(req.session);
            });
        }
    }
};

