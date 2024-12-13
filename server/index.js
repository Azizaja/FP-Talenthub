const express = require("express");
const pool = require("./connection");
const cors = require("cors");

const app = express();

const port = 3000;

// nambahin cors/ permission
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello World! Yang penting coba aja dulu");
});

app.get("/movies", async (request, response) => {
  try {
    const data = await pool.query(`SELECT * FROM Movies`);

    let dataMovies = data.rows;

    response.json(dataMovies);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/movies/:id", async (request, response) => {
  try {
    const data = await pool.query(
      `SELECT * FROM Movies WHERE id = ${request.params.id}`
    );

    let dataMovies = data.rows[0];

    // if (dataMovies === undefined || dataMovies === null) {}
    if (!dataMovies) {
      response.status(404).json({ message: "Data Not Found" });
    } else {
      response.json(dataMovies);
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/menu", async (request, response) => {
  try {
    const data = await pool.query(`SELECT * FROM TableMenus`);

    let dataMenus = data.rows;

    response.json(dataMenus);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/menus/:id", async (request, response) => {
  try {
    const data = await pool.query(
      `SELECT * FROM TableMenus WHERE id = ${request.params.id}`
    );

    let dataMenus = data.rows[0];

    if (!dataMenus) {
      response.status(404).json({ message: "Data Not Found" });
    } else {
      response.json(dataMenus);
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});