import React, { useContext } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CartContext } from "../CartContext";
import { IconContext } from "react-icons/lib";
import Modal from "./Modal";

const Header = () => {
  const { quantity, setQuantity, modalOpen, setModalOpen } =
    useContext(CartContext);

  return (
    <header className="d-flex justify-content-between  align-items-center px-md-5 px-2">
      <h1 className=" fst-italic">FashionHub</h1>
      <div className="cart">
        <div className="d-flex justify-content-center">
          <div onClick={() => setModalOpen(!modalOpen)}>
            <IconContext.Provider value={{ color: "875541" }}>
              <MdOutlineShoppingBag />
            </IconContext.Provider>
          </div>
          <small className="top-0">{quantity}</small>
        </div>
      </div>
    </header>
  );
};

export default Header;
