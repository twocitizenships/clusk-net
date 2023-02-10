const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("client/public/html/"));
app.use(express.static("client/public/html/images/"));

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" })
// });

app.get("/links.html", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/', 'links.html'));
});

app.get("/images/Links.png", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/', 'Links.png'));
});

app.get("/images/Home.png", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/', 'Home.png'));
});

app.get("/images/BlogBanner-min.png", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/', 'BlogBanner-min.png'));
});

app.get("/images/BlogBanner-min.png", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/', 'BlogBanner-min.png'));
});

app.get("/images/spotify.svg", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/film/', 'spotify.svg'));
});

app.get("/images/github.svg", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/film/', 'github.svg'));
});

app.get("/images/AirplaneWingSpain.jpeg", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/film/', 'AirplaneWingSpain.jpeg'));
});

app.get("/images/BullFightSpain.jpeg", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/film/', 'BullFightSpain.jpeg'));
});

app.get("/images/CookingKuwait.jpeg", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/film/', 'CookingKuwait.jpeg'));
});

app.get("/images/EdgeOfWorldAtami.jpg", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/film/', 'EdgeOfWorldAtami.jpg'));
});

app.get("/images/HeavenAtami.jpg", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/film/', 'HeavenAtami.jpg'));
});

app.get("/images/Paradise2Atami.jpg", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/film/', 'Paradise2Atami.jpg'));
});

app.get("/images/SheepKuwait.jpeg", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/film/', 'SheepKuwait.jpeg'));
});

app.get("/images/SlimAaronsAtami.jpg", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/images/film/', 'SlimAarons.jpg'));
});

app.get("/styles.css", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/', 'styles.css'));
});

app.get("/film.html", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/', 'film.html'));
});

app.get("/blog.html", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/', 'blog.html'));
});

app.get("/reach.html", (req, res) => {
    res.sendFile(path.resolve('../client/public/html/', 'reach.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve('../client/public/html/', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});