# Social Media App

## Database Setup

```shell
mysql -u root -p
```

```mysql
create database socialmediadb;

create user socialuser identified with mysql_native_password by 'socialpass';

grant all privileges on socialmediadb.* to socialuser;

flush privileges;
```

## Folder Structure

### Backend (Server)
```shell
src
├───controllers         # functions to connect routes to db operations
├───db                  # db connections and model definitions
├───public              # html/js/css files for static part of site
└───routes              # express middlewares (route wise)
```

### Frontend (Client side  Code)
```shell
src/public
├───app                             # our own frontend code
│   └───social-common.js
├───components                      # our own html snippets
│   └───navbar.html
├───css                             # CSS libraries e are using
│   └───bootstrap.css
├───index.html                      # First / home page
└───js                              # js libraries we are using
    ├───bootstrap.js
    ├───jquery-3.6.0.js
    └───popper.js
```

## Business Logic

### Users

1. **Create users** 
    This will create a new user with a random username

### Posts
1. **Create Posts** 
    this will create a new post, required fields are
    - username (the autor of this post)
    - title
    - body

2. **Show all Posts** 
    List all existing posts, we should have following filtering support
    - filter by username
    - filter by query contained in title (search by title)

3. **Edit Posts** `TBD`

4. **Delete Posts** `TBD`

### Comments

1. **Show all comments (of a user)**

2. **Show all comments (under a post)**

3. **Add a comment**

## API Documentation

### `users`

1. `POST /users`

Creates a new user with random username and an user id.

2. `GET /users/{userid}`

Get an user with a given user id.

2. `GET /users/{username}`

Get an user with a given user id.

### `posts`

1. `GET /posts`

Get all posts by everyone.

2. `POST /posts`

Create a new post.
Required fields -
```
userId=
title=
body=
```