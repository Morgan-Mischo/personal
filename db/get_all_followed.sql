SELECT height, weight, calories, diet, workout, goals, photo, posts.id, posts.user_id
FROM posts 
JOIN follow
ON follow.user_followed = posts.user_id
where follow.user_following = $1
