module.exports = {
    async getFollowed(req, res) {
        let { id } = req.params; 
        const db = req.app.get('db'); 
        let followed = await db.get_all_followed(+id); 
        res.send(followed); 
    }
}