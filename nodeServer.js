const http = require("http");
const fs = require("fs");

let users = [];

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.writeHead(400, { "Content-Type": "text/plain" })
                res.end("Error! HTML File loading...")
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/users" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(users));
    }
    else if (req.url === "/users" && req.method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const data = JSON.parse(body);
                res.writeHead(201, { "Content-Type": "application/json" })
                res.end(JSON.stringify(
                    {
                        message: "User Created",
                        user: data
                    }
                ))
                users.push(data)
            }
            catch (error) {
                res.writeHead(400, { "Content-Type": "text/plain" })
                res.end("Invalid JSON Data entered")
                return;
            }
        })
    }
    else if (req.url === "/users" && req.method === "DELETE") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        })

        req.on("end", () => {
            try {
                const data = JSON.parse(body);

                const index = users.findIndex(user => user.name === data.name);

                if (index === -1) {
                    res.writeHead(404, { "Content-Type": "application/json" })
                    res.end(JSON.stringify({ message: "User not found" }));
                    return
                }

                users.splice(index, 1)
                res.writeHead(200, { "Content-type": "application/json" })
                res.end(JSON.stringify({ message: "User Deleted" }));
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" })
                res.end(JSON.stringify({ message: "Invalid JSON Data" }))
            }
        })
    }
})

server.listen(5000, () => {
    console.log("Server Running on Port 5000")
});