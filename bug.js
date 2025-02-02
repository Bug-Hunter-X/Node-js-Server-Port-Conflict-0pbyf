const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  // ...
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// This will cause an error if the server is not closed properly before the process exits
// because the port will still be in use, even after the process has terminated. 
// Solution: Close the server using server.close() method after some time or after all the requests are handled