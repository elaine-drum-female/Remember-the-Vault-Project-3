let admin = (req, res, next) => {
    //If the user is not an auth send message that they are not authorized
    if(req.user.role === 0) {
        return res.send("You are not authorized!")
    }
    next();
}

module.exports = { admin }