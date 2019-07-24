module.exports = (req, res, next) => {
    console.log('hitting authcheck')
    if(!req.session.user.loggedIn) {
        return res.status(401).send('Not authorized'); 
    }
    next(); 
}; 