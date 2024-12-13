import React from "react";

function CartItem({ cart }) {
  return (
    <div className="d-flex p-2 gap-2 border rounded-4">
      <img
        src={cart.imgMenu}
        alt="menu-poster"
        style={{
          width: "80px",
          height: "100px",
          objectFit: "cover",
        }}
        className="rounded-4"
      />
      <div>
        <h5 className="card-title">{cart.namaMenu}</h5>
        <p className="card-text">
          Rp. {cart.harga} -{" "}
          <span className="badge text-bg-warning">{cart.jenisMenu}</span>
        </p>
      </div>
    </div>
  );
}

function Cart({ cartItems }) {
  // Cek apakah cartItems kosong
  if (cartItems.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center p-4">
        <h5>Tidak ada pesanan dipilih</h5>
      </div>
    );
  }

  return (
    <div>
      {cartItems.map((cart, index) => (
        <CartItem key={index} cart={cart} />
      ))}
    </div>
  );
}

export default Cart; // Pastikan Cart yang diexport, bukan CartItem
