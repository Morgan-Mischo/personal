insert into users(username, password, first_name, last_name, email, picture)
values($1, $2, $3, $4, $5, $6)
returning *; 