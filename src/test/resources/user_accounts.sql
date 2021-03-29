CREATE SEQUENCE IF NOT EXISTS user_accounts_seq;

CREATE TABLE IF NOT EXISTS user_accounts (
	user_id BIGINT NOT NULL DEFAULT nextval('user_accounts_seq') PRIMARY KEY,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	role varchar(255),
	enabled boolean NOT NULL
);

select * from user_accounts

delete from user_accounts
where user_id = '1'



update user_accounts
set role ='ROLE_ADMIN'
where username='valton'