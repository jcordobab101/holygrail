#Holy Grail full-stack application 
#Dependencies:
1-Express
2-IOREDIS

#Components:
-article.js
-footer.js
-header.js
-left.js
-rgith.js
-app.js
-index.html

#Example :
[nodemon] starting `node index.js`
Server initiated on port 4000.
[ '0', '0', '0', '0', '0' ]
{ header: 1, left: 0, article: 0, right: 0, footer: 0 }
Asynchronous calls update the components as they change. 
REST API enabled:
/data
/update
#Example:
Get
http://localhost:port/data
Post
http://localhost:port/update/component/value

