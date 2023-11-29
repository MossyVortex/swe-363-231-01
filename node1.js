// Import the 'http' module
const http = require('http');

// Configure the HTTP server to respond with "Hello, World!" to all requests
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});

// Listen on port 3000, IP defaults to '127.0.0.1'
const PORT = 3000;
const IP = '127.0.0.1';

server.listen(PORT, IP, () => {
  console.log(`Server running at http://${IP}:${PORT}/`);
});
