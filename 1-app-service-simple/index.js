require('http')
  .createServer((_, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK');
  })
  .listen(
    3000,
    '0.0.0.0',
    console.log(`Server running at http://localhost:3000`)
  );
