import {MongoClient, ServerApiVersion} from 'mongodb';

/* obj representing the mongodb cluster on port 27017 */
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

/* 
  $sudo systemctl mongod - starts mongodb daemon
  $sudo systemctl status mongod - checks if mongodb daemon is running
*/

/*
  wait to connect
  test connection
  confirm to terminal ping was successful 
*/
try{
  await client.connect();
  await client.db("admin").command({ping: 1});
  console.log("pinged db - Connection successful!");
}
/* if there are any errors at any point,
cut execution and print here */
catch(e){
  console.error(e);
}

/* on the cluster, create an empty DB */
const articles_db = client.db("Articles");

export {articles_db};