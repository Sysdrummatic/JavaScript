import sqlite3 from "sqlite3";
import { LoremIpsum } from "lorem-ipsum";

const SQlite3 = sqlite3.verbose();
const db = new SQlite3.Database("db.sqlite3");

const query = (command, method = "all") => {
  //command is the sql query, method is the method to use
  return new Promise((resolve, reject) => {
    //return a promise to the caller of query function
    db[method](command, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const createPostIfEmpty = async () => {
  const existing = await query("SELECT * FROM post");
  if (existing.length === 0) {
    const lorem = new LoremIpsum();
    for (let i = 0; i < 100; i++) {
      const tags = [...Array(5)].map(() => lorem.generateWords(1));
      await query(
        `INSERT INTO post VALUES (
                "${new Date().toISOString()}", 
                "${lorem.generateWords(5)}", 
                "${lorem.generateParagraphs(1)}", 
                "${lorem.generateWords(1)}", 
                "${tags.join(",")}")`,
        "run"
      );
    }
  }
};

db.serialize(async () => {
  await query(
    `CREATE TABLE IF NOT EXISTS post (
        date TEXT, 
        title TEXT, 
        content TEXT, 
        author TEXT, 
        tags TEXT
        )`,
    "run"
  );
  await createPostIfEmpty();
});

db.serialize(async () => {
  await query(
    `CREATE TABLE IF NOT EXISTS post (
            date TEXT, 
            title TEXT, 
            content TEXT, 
            author TEXT, 
            tags TEXT
            )`,
    `run`
  );
  await createPostIfEmpty();
  const posts = await query("SELECT * FROM post");
  console.log(posts);
});

//db browser

//db hub
