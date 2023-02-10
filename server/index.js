const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("client/public/html"));

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" })
// });

app.get("/links.html", (req, res) => {
    res.sendFile(path.resolve('client/public/html/', 'links.html'));
});

app.get("/film.html", (req, res) => {
    res.sendFile(path.resolve('client/public/html/', 'film.html'));
});

app.get("/blog.html", (req, res) => {
    res.sendFile(path.resolve('client/public/html/', 'blog.html'));
});

app.get("/reach.html", (req, res) => {
    res.sendFile(path.resolve('client/public/html/', 'reach.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve('client/public/html/', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});