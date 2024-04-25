// Create web server and listen on port 3000
// This is the main entry point of the application
const express = require('express');
const bodyParser = require('body-parser');
const comment = require('./comment.js');
const app = express();
const port = 3000;

// Use the body-parser middleware to parse incoming request body
app.use(bodyParser.json());

// Create a new comment
app.post('/comment', comment.createComment);

// Get comments by post id
app.get('/comment/:postId', comment.getComments);

// Delete a comment by id
app.delete('/comment/:commentId', comment.deleteComment);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});