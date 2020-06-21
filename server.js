const express = require('express');
const app = express();
const server = require('http').Server(app);


server.listen(3000, function(){
  console.log("Listening on port 3000");
});

app.use(express.static("public"));
