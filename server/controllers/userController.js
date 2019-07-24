const bcrypt = require('bcrypt'); 
const saltRounds = 12; 

module.exports = {
    async login(req, res) {
        let { username, password } = req.body; 
        const db = req.app.get('db'); 
        let [existingUser] = await db.get_user_by_username(username); 
        if (!existingUser) return res.status(400).send('Username not found'); 
        let result = await bcrypt.compareSync(password, existingUser.password); 
        if(result) {
            req.session.user= {
                username: existingUser.username, 
                id: existingUser.id, 
                loggedIn: true
            }; 
            res.send(req.session.user); 
        }
        else res.status(401).send('Username or password incorrect'); 
    }, 

    async signup(req, res){
        console.log('reaching uc')
        let { first_name, last_name, username, email, password } = req.body; 
        const db = req.app.get('db'); 
        let [existingUser] = await db.get_user_by_username(username); 
        if (existingUser) return res.status(400).send('Username exists already'); 
        let salt = await bcrypt.genSalt(saltRounds); 
        let hash = await bcrypt.hash(password, salt); 
        let [user] = await db.create_user([username, hash, first_name, last_name, email]); 
        req.session.user = { username: user.username, first_name: user.first_name, last_name: user.last_name, email: user.email, id: user.id, loggedIn: true }; 
        console.log(req.session.user)
        res.send(req.session.user); 
    }, 

    logout(req, res){
        req.session.destroy(); 
        res.sendStatus(200); 
    }, 

    getUser(req, res) {
        res.send(req.session.user); 
    }, 

    async getUsers(req, res) {
        console.log('hit get users')
        const db = req.app.get('db'); 
        let users = await db.get_all_users(); 
        console.log([users]); 
        res.send(users); 
    }
}; 