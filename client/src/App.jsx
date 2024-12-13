import { useState, useEffect } from "react";
import "./App.css";
import CartItem from "./components/CartItem";
import CardItem from "./components/CardItem";

function App() {
  //? ngambil data
  const [dataMenus, setDataMenus] = useState([]);

  async function getData() {
    const url = "http://localhost:3000/menu";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      setDataMenus(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    // isinya
    getData();
  }, []);

  // console.log(dataMenus);

  //? handle cart
  const [cart, setCart] = useState([]);

  function addToCart(menu) {
    setCart([...cart, menu]);
  }

  return (
    <>
      {/* navbar */}
      <nav className="navbar sticky-top bg-light shadow">
        <div className="container d-flex">
          <a className="navbar-brand" href="#">
            KANTINKUY
          </a>
          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className="material-symbols-outlined">
              local_mall
            </span>{cart.length}
          </button>
        </div>
      </nav>

      <div className="container py-5">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://i.pinimg.com/736x/29/4d/ed/294dedc054293a5939bf32ba6ad40fe1.jpg" className="d-block w-100" alt="banner-carousel"/>
            </div>
            <div className="carousel-item">
              <img src="https://imgv2-2-f.scribdassets.com/img/document/492009973/original/c3af2fb7df/1?v=1" className="d-block w-100" alt="banner-carousel"/>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {dataMenus.map((menu, index) => {
            return <CardItem menu={menu} key={index} addToCart={addToCart} />;
          })}
        </div>
      </div>

      {/* drawer */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-2">
          {/* Menambahkan kondisi jika cart kosong */}
          {cart.length === 0 ? (
            <div className="d-flex justify-content-center align-items-center p-4">
              <h5>Tidak ada pesanan dipilih</h5>
            </div>
          ) : (
            cart.map((el, i) => {
              return <CartItem cart={el} key={i} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;
