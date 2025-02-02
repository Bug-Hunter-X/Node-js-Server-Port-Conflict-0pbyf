const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  // ...
  res.end();
});

const gracefulShutdown = () => {
  server.close(() => {
    console.log('Server closed');
    process.exit();
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});