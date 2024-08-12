import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { motion } from "framer-motion";
import axios from "axios";

const Modal = ({ product, selectedColor, selectedSize }) => {
  const { quantity, setQuantity, modalOpen, setModalOpen } =
    useContext(CartContext);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleBuyNow = async () => {
    try {
      const orderData = {
        quantity,
        selectedColor,
        selectedSize,
      };

      const response = await axios.post("/api/orders", orderData);

      console.log("Order created:", response.data);
      setModalOpen(false);
      setQuantity(1);
      alert("Order Saved to databese!");
    } catch (error) {
      alert("Color,Size and Quantity are required.");
    }
  };

  return (
    modalOpen && (
      <div className="modal-main d-grid">
        <motion.div
          initial={{ opacity: 0, y: 1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="modal-contents "
        >
          <div className="my-3">
            <button
              className="modal-cancel"
              onClick={() => setModalOpen(false)}
            >
              X
            </button>
          </div>

          <div className="d-flex gap-3">
            <img
              src={product.thumbnails[0]}
              alt={product.name}
              className="modal-image"
            />
            <div>
              <h1 className="fs-4">{product.name}</h1>
              <small>{product.subtitle}</small>
              <div className="d-flex">
                <div
                  className="colors m-2"
                  style={{ background: `${selectedColor}` }}
                ></div>
                <p className="m-2">{selectedSize}</p>
              </div>
            </div>
            <div className="d-flex modal-quantity justify-content-around">
              <button className="inc-btn" onClick={handleDecrease}>
                -
              </button>

              <p>{quantity}</p>
              <button className="inc-btn" onClick={handleIncrease}>
                +
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="buy-now-btn" onClick={handleBuyNow}>
              ${(product.price * quantity)?.toFixed(2)} Buy Now
            </button>
          </div>
        </motion.div>
      </div>
    )
  );
};

export default Modal;
