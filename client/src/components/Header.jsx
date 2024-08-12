import React, { useContext } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CartContext } from "../CartContext";
import { IconContext } from "react-icons/lib";
import { motion } from "framer-motion";

const Header = () => {
  const { quantity, modalOpen, setModalOpen } = useContext(CartContext);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      className="d-flex justify-content-between  align-items-center px-md-5 px-2"
    >
      <h1 className=" fst-italic " style={{ color: "#0D3356" }}>
        FashionHub
      </h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          ease: "easeOut",
          delay: 0.8,
          duration: 0.7,
          type: "spring",
        }}
        onClick={() => setModalOpen(!modalOpen)}
        className="cart"
      >
        <div className="d-flex justify-content-center">
          <div>
            <IconContext.Provider value={{ color: "875541" }}>
              <MdOutlineShoppingBag />
            </IconContext.Provider>
          </div>
          <small className="top-0">{quantity}</small>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
