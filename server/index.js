const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/public')));

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" })
// });

app.get("/links.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public/', 'links.html'));
});

app.get("/film.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public/', 'film.html'));
});

app.get("/blog.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public/', 'blog.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public/', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});