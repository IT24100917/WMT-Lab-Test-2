const mongoose = require("mongoose");

mongoose.connect("mongodb://coffeeapp:password123@ac-rvozrvc-shard-00-00.bnlaata.mongodb.net:27017,ac-rvozrvc-shard-00-01.bnlaata.mongodb.net:27017,ac-rvozrvc-shard-00-02.bnlaata.mongodb.net:27017/?ssl=true&replicaSet=atlas-ywyy44-shard-0&authSource=admin&appName=Cluster0")

.catch(err => console.log(err));