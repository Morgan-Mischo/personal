insert into posts(height, weight, calories, diet, workout, goals, photo, user_id)
values($1, $2, $3, $4, $5, $6, $7, $8); 

select * from posts
where user_id = $8; 