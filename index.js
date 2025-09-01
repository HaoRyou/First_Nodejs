const http = require('http');
const fs = require('fs');
const port = 8080;

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

http.createServer((req,res) =>{
  const url = new URL(req.url, `http://localhost:${port}`);
  const path = url.pathname;

  if(path ==='/'){
    const html = fs.readFileSync("./index.html", 'utf8');
    res.writeHead(200, {"content-type": "text/html"});
    res.end(html);
  }
  else if(path ==='/about'){
    const html = fs.readFileSync("./about.html", 'utf8');
    res.writeHead(200, {"content-type": "text/html"});
    res.end(html);
  }
  else if(path ==='/contact-me'){
    const html = fs.readFileSync("./contact-me.html", 'utf8');
    res.writeHead(200, {"content-type": "text/html"});
    res.end(html);
  }
  else{
    const html = fs.readFileSync("./404.html", 'utf8');
    res.writeHead(404, {"content-type": "text/html"});
    res.end(html);
  }

}).listen(port);