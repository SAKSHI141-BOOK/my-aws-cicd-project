const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <h1>Hii from Node.js team by sakshi!!!!</h1>
        <p>Application deployed using GitHub Actions → AWS EC2</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
