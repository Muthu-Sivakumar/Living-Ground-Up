import express from 'express'
import logger from 'morgan'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {articles_db} from './mongodb.js'
import { ObjectId } from 'mongodb'

/* the express server instance listening to a single port */
const app = express();

/* 
when client asks for a file
  get the file's path on this server
  strip the file's name to get dir's name
  append 'static' to dir's name to initiate search for all files
*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client-side/react-app/dist')));


/*
send to MongoDB
print key-value iterable (.js obj)
send status code in response
send JSON in response (.js obj -> JSON str) 
*/
app.post("/api/sendArticle", async function (req, res){
  try{
    const newDoc = {
      articleType: req.body.articleType,
      articleTime: req.body.articleTime,
      articleTitle: req.body.articleTitle,
      articleText: req.body.articleText
    };
    const collection = await articles_db.collection("Articles");
    const result = await collection.insertOne(newDoc);
    res.status(200).send('received article');
  }
  catch(e){
    console.error(e);
    res.status(500).send("error sending data to mongodb");
  }
  console.log(req.body);
});

/* 
  fallback - used for page refreshes (rebuilds page, react-router sees
  browser URL and maps to page routing (routes.jsx)
*/
app.get('/{*anyWebPage}', function(req, res){
  res.sendFile(path.join(__dirname, '../client-side/react-app/dist/index.html'));
});

/* run the express server on port 5000 */
app.listen(5000);