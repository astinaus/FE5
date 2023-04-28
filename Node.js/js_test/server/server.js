const http = require('http');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200);
      res.end('main url');
    } else if (req.url === '/upload') {
      res.writeHead(200);
      res.end('upload url');
    } else if (req.url === '/delete') {
      res.writeHead(200);
      res.end('delete url');
    } else {
      res.writeHead(404);
      res.end('404 not found');
    }
  })
  .listen(3000, () => {
    console.log('server is running on port 3000');
  });
