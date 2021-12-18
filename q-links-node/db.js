const sqlite3 = require("sqlite3").verbose();

let db;

if (!db) {
  db = new sqlite3.Database("./qLinks.db", sqlite3.OPEN_READWRITE);
}
module.exports = db;
