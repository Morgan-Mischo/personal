update posts 
set height = $2, weight = $3, calories = $3, diet = $4, workout = $5, goals = $6, 
where id = $1; 

select * from posts 
where user_id = $7; 