module.exports = {
  async getFollowed(req, res) {
    let { id } = req.params;
    const db = req.app.get("db");
    let followed = await db.get_all_followed(+id);
    res.send(followed);
  },

  async follow(req, res) {
    let { user_following, user_followed } = req.body;
    const db = req.app.get("db");
    let follows = await db.add_follower([user_following, user_followed]);
    res.send(follows);
  }, 
  
  logout(req, res){
    req.session.destroy(); 
    res.sendStatus(200); 
}
};
