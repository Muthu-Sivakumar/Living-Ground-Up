import express from 'express'
import logger from 'morgan'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

/* makes express server */
const app = express();

/* 
  when client asks for a file
  get the file's path on this server
    strip the file's name to get dir's name
    append 'static' to dir's name to locate file
*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* 
  every server req passes through app.use functions

  (23) all reqs are logged into dev terminal
  (24) express tries to find express json header. if found, reads body and parses it
      and stores result in req.body

      calling req.body otherwise makes it undefined. the body value must be parsed into
  (25) skip if not GET/HEAD method - sees if req URL matches a file in static files
*/
app.use(logger('dev'));
/* JSON str -> key-value iterable */
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client-side/react-app/dist')));

/* server reqs pass through app.METHOD reqs based on route and method */
app.post("/api/sendArticle", function(req, res){
  /* prints key-value iterable */
  console.log(req.body);
  res.status(200)
  /* .js obj (key-value pairs) -> JSON str */
  res.json({message: 'received article'});
});

/* 
  fallback - used on page refresh
    rebuilds page
    lets react-router look at browser URL, then maps to page routing (routes.jsX)
*/
app.get('/{*anyWebPage}', function(req, res){
  res.sendFile(path.join(__dirname, '../client-side/react-app/dist/index.html'));
})
app.listen(5000);