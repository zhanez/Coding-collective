// This requires the mongo client dependency
const { MongoClient } = require("mongodb");

// This sets up my mongo url to my free cluster
const url = "mongodb+srv://new-user:vuSs8WDXTRGD4Cf6@cluster0.z4zua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);

// This function connects to the cluster and catches any errors
async function run () {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

// This calls the function so it starts the connection 
run().catch(console.dir);