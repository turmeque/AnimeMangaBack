require('dotenv').config();

module.exports ={
  "development": {
    "username": "postgres",
    "host": "containers-us-west-61.railway.app",
    "port": 6843,
    "database": "railway",
    "dialect": "postgres",
    "password" : "a1asGtSEthExc3cliecF" 
    //"logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "railway",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

