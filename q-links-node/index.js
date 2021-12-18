const express = require("express");
const cors = require("cors");
const path = require("path");
const compression = require("compression");
const db = require("./db");
const app = express();

app.use(cors());
app.use(compression());

app.get("/api/getUrl", (req, res) => {
  const { key } = req.query;
  db.all("select url from url_mapping where key = ?;", [key], (err, rows) => {
    if (rows.length) {
      res.send(rows[0]);
    } else {
      res.send({});
    }
  });
});

app.get("/api/createUrl", async (req, res) => {
  const { key, url } = req.query;
  if (url.indexOf("http://") != 0 && url.indexOf("https://") != 0) {
    url = `http://${url}`;
  }
  await db.run("insert into url_mapping(key, url) values(?, ?)", [key, url]);
  res.end();
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(3200);
