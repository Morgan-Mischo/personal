CREATE TABLE "users" (
	"id" serial NOT NULL,
	"first_name" TEXT NOT NULL,
	"last_name" TEXT NOT NULL,
	"username" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"picture" TEXT NOT NULL, 
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "posts" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"height" TEXT,
	"weight" TEXT,
	"calories" TEXT,
	"diet" TEXT,
	"workout" TEXT,
	"goals" TEXT,
	"photo" TEXT,
	CONSTRAINT "posts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "follow" (
	"id" serial NOT NULL,
	"user_following" integer NOT NULL,
	"user_followed" integer NOT NULL,
	CONSTRAINT "follow_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "follow" ADD CONSTRAINT "follow_fk0" FOREIGN KEY ("user_following") REFERENCES "users"("id");
ALTER TABLE "follow" ADD CONSTRAINT "follow_fk1" FOREIGN KEY ("user_followed") REFERENCES "users"("id");

