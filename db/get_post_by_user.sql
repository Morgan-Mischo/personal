SELECT posts.*, users.first_name, users.last_name, users.username, users.picture FROM posts
JOIN users
ON posts.user_id = users.id
WHERE users.id = $1; 