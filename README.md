# TKN
TKN

# How to Setup
## install postgres database on linux
```
$ sudo apt-get update
$ sudo apt-get install postgresql postgresql-contrib
```
## connect postgres
```
sudo -u postgres psql
```
## check config
```
postgres=> \conninfo
```
## Create a password
```
postgres=> alter user postgres password 'admin';
postgres=> \q
```
## Install npm packages
```
npm install 
```
## Run migrations
```
npm run migrate
```
## Run seed data
```
npm run seed 
```
## Create Api Doc
```
npm run doc
```

## Now finally start server
```
npm run start 
```