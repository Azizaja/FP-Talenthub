function CardItem({ menu, addToCart }) {
  return (
    <>
      <div className="col p-3">
        <div className="card rounded shadow">
          <img
            src={menu.imgMenu}
            className="card-img-top rounded-4"
            alt="image-poster"
            style={{ height: "300px", objectFit: "cover", padding: "10px" }}
          />
          <div className="card-body">
            <p className="card-title"><strong>{menu.namaMenu} </strong><span className="badge bg-warning ">{menu.jenisMenu}</span></p>

            <p className="card-text">
              Rp. {menu.harga}
            </p>
            <a
              href="#"
              className="btn btn-sm btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target={"#modal" + menu.id}
            >
              Detail
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={"modal" + menu.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {menu.namaMenu}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={menu.imgMenu}
                className="card-img-top rounded-4"
                alt="image-poster"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <strong>
                Rp. {menu.harga} -{" "}
                <span className="badge text-bg-warning">{menu.jenisMenu}</span>
              </strong>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => {
                  addToCart(menu);
                }}
                type="button"
                className="btn btn-outline-primary"
              >
                <span className="material-symbols-outlined">
                  shopping_cart
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
