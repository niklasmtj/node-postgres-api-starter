# node-postgres-api-starter

This is a quick starter for a NodeJS API with Express as a server framework and PostgreSQL as a database.
It works with a users table to create users by name and email address.  
Functions include:
* list all users
* get a user by Id
* create a new user
* update an existing user
* delete a user from DB

For a quick start the database credentials have to be inserted in the `queries.js` file. Please use a `.env` file as soon as possible for better security.

## Create a database

Set up a database like this to getting things started:

```sql
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);
```
## Run with Docker

The easiest and quickest way to start with this API starter is using `docker-compose` which will set up two containers. One for the API and one for Postgres. 

Start with cloning the repository

```
 git clone https://github.com/niklasmtj/node-postgres-api-starter.git
```

Then change the directory to the newly created API directory and change the environment variables to your liking in `docker-compose.yml`. Of course the environment variables set in `docker-compose.yml` file must match between the database and the API. After that you can start your Docker containers. The flag `-d` will start the containers in detached mode. Remove it if you don't want this.

```
cd node-postgres-api-starter
nano docker-compose.yml
docker-compose build
docker-compose up -d
```

A database seeded with some example users will be created and the API will be exposed on the host at <http://localhost:3000>. 