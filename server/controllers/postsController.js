module.exports = {
    async getPosts(req, res) {
        let { userId } = req.params; 
        const db = req.app.get('db'); 
        let posts = await db.get_post_by_user(+userId); 
        res.send(posts); 
    }, 

    async deletePost(req, res){
        let { postId } = req.params; 
        const db = req.app.get('db'); 
        let posts = await db.delete_post([+postId, req.session.user.id]); 
        console.log(posts); 
        res.send(posts); 
    }, 

    async editPost(req, res) {
        let { postId } = req.params; 
        let { newHeight, newWeight, newCalories, newDiet, newWorkout, newGoals, newPhoto } = req.body; 
        const db = req.app.get('db'); 
        let posts = await db.edit_post([
            +postId, 
            newHeight, 
            newWeight, 
            newCalories, 
            newDiet, 
            newWorkout, 
            newGoals, 
            newPhoto, 
            req.session.user.id
        ]); 
        res.send(posts); 
    }, 
    
}