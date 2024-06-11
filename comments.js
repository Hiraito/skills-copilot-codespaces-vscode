// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const comments = require('./comments');

app.get('/comments', (req, res) => {
  comments.getComments(req, res);
});

app.post('/comments', (req, res) => {
  comments.addComment(req, res);
});

app.listen(3001, () => {
  console.log('Comments service started on port 3001');
});