const pool = require("./connection");

// Query untuk membuat tabel Movies
let createTableMovies = `
  CREATE TABLE Movies (
    "id" SERIAL PRIMARY KEY, 
    "title" VARCHAR(50),
    "releaseYear" INTEGER,
    "imageUrl" TEXT, 
    "genre" VARCHAR(10)
  );
`;

// Query untuk membuat tabel TableMenus
let createTableMenus = `
  CREATE TABLE TableMenus (
    "id" SERIAL PRIMARY KEY,
    "jenisMenu" VARCHAR(20),
    "namaMenu" VARCHAR(50),
    "harga" INTEGER,
    "imgMenu" TEXT
  );
`;

// Koneksi ke database => asynchronous
async function runSetup() {
  try {
    // Buat tabel Movies
    await pool.query(createTableMovies);
    console.log("Success setup table Movies");

    // Buat tabel TableMenus
    await pool.query(createTableMenus);
    console.log("Success setup table TableMenus");
  } catch (error) {
    console.log(error);
  }
}

runSetup();
