DELETE FROM posts 
WHERE id=$1; 

SELECT * FROM posts
WHERE user_id=$2;