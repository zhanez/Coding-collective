const { MongoClient } = require("mongodb");

const url = "mongodb+srv://new-user:<password>@cluster0.z4zua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);

