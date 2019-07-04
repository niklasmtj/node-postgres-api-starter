# node-postgres-api-starter

This is a quick starter for a nodeJS API with Express as a server framework and PostgreSQL as a database.
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
