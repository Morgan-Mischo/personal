SELECT height, weight, calories, diet, workout, goals, photo
FROM posts 
JOIN users 
ON users.id = posts.user_id
JOIN follow
ON follow.user_following = posts.user_id
where users.id = $1
