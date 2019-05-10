const {User} = require('./../models/user');
let auth = (req, res, next) => {
    // Find user ; then check if the token is OK
    let token = req.cookies.x_auth;
    // This gets added to our user schema model
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({
            isAuth:false,
            error:true
        });

        req.token = token;
        req.user = user;
        next();
    });
}
module.exports = { auth }