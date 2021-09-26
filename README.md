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
```shell
src
├───controllers         # functions to connect routes to db operations
├───db                  # db connections and model definitions
├───public              # html/js/css files for static part of site
└───routes              # express middlewares (route wise)
```

