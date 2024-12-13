const pool = require("./connection");

const menus = [
  {
    jenisMenu: "Main Course",
    namaMenu: "Nasi Goreng Special",
    harga: 35000,
    imgMenu: "https://upload.wikimedia.org/wikipedia/commons/6/64/Nasi_goreng.jpg",
  },
  {
    jenisMenu: "Beverage",
    namaMenu: "Es Teh Manis",
    harga: 10000,
    imgMenu: "https://upload.wikimedia.org/wikipedia/commons/2/24/Es_teh_manis.jpg",
  },
  {
    jenisMenu: "Dessert",
    namaMenu: "Pisang Goreng",
    harga: 20000,
    imgMenu: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pisang_goreng.jpg",
  },
  {
    jenisMenu: "Main Course",
    namaMenu: "Sate Ayam",
    harga: 40000,
    imgMenu: "https://upload.wikimedia.org/wikipedia/commons/2/22/Sate_Ayam.jpg",
  },
  {
    jenisMenu: "Beverage",
    namaMenu: "Kopi Hitam",
    harga: 15000,
    imgMenu: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
  },
  {
    jenisMenu: "Dessert",
    namaMenu: "Es Krim",
    harga: 25000,
    imgMenu: "https://upload.wikimedia.org/wikipedia/commons/4/47/Various_flavors_of_ice_cream.jpg",
  },
];

// Fungsi untuk memasukkan data ke tabel TableMenus
async function insertMenus() {
  try {
    for (const menu of menus) {
      const query = `
        INSERT INTO TableMenus ("jenisMenu", "namaMenu", "harga", "imgMenu")
        VALUES ($1, $2, $3, $4)
      `;
      const values = [menu.jenisMenu, menu.namaMenu, menu.harga, menu.imgMenu];
      await pool.query(query, values);
    }
    console.log("Success inserting menus into TableMenus");
  } catch (error) {
    console.error("Error inserting menus:", error);
  }
}

insertMenus();
