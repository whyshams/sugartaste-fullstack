import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductImages from "../components/ProductImages";
import { CartContext } from "../CartContext";
import Modal from "../components/Modal";
import { MdDone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const { quantity, setQuantity, modalOpen, setModalOpen } =
    useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProduct(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    setModalOpen(true);
  };

  {
    /*
    
      const handleBuyNow = () => {
    // Save cart data to database, then reset
    console.log({
      quantity,
      selectedColor,
      selectedSize,
      timestamp: new Date().toISOString(),
    });
    setModalOpen(false);
    setQuantity(1);
  };
    
    */
  }

  return (
    <>
      {product ? (
        <div className="product-page mt-3 container">
          <div className="image-gallery">
            {product?.thumbnails?.length > 0 && (
              <ProductImages images={product?.thumbnails} />
            )}
          </div>

          <div className="product-info">
            <div className="nav-history">
              <ul>
                <li>
                  <p>Home</p>
                  <div>
                    <IconContext.Provider
                      value={{ color: "#a3a9c2", size: "20px" }}
                    >
                      <IoIosArrowForward />
                    </IconContext.Provider>
                  </div>
                </li>
                <li>
                  <p>Decoration</p>
                  <div>
                    <IconContext.Provider
                      value={{ color: "#a3a9c2", size: "20px" }}
                    >
                      <IoIosArrowForward />
                    </IconContext.Provider>
                  </div>
                </li>
                <li>
                  <p>Furniture</p>
                  <div>
                    <IconContext.Provider
                      value={{ color: "#a3a9c2", size: "20px" }}
                    >
                      <IoIosArrowForward />
                    </IconContext.Provider>
                  </div>
                </li>
                <li>
                  <p>Storage</p>
                  <div>
                    <IconContext.Provider
                      value={{ color: "#a3a9c2", size: "20px" }}
                    >
                      <IoIosArrowForward />
                    </IconContext.Provider>
                  </div>
                </li>
                <li>
                  <p style={{ color: "#1d364d" }}>Sideboard</p>
                </li>
              </ul>
            </div>
            <div className="my-3">
              <h1 className="fs-4">{product.name}</h1>
              <p className="subtitle">{product.subtitle}</p>
            </div>
            <hr className="border-bottom-lite" />

            <div className="my-3 d-flex ">
              <p className="price">${product.price?.toFixed(2)}</p>
              <div className="d-grid review-main">
                <div className="d-flex">
                  <div className="stars">
                    <FaRegStar />
                    <div className="p-2">4.8</div>
                  </div>
                  <div className="reviews">
                    <HiOutlineChatBubbleLeftEllipsis />
                    <div className="p-2">67 Reviews</div>
                  </div>
                </div>
                <div className="d-flex gap-1">
                  <strong className="text-success p-1">93%</strong>
                  <small className="text-muted p-1">
                    of buyers have recommended this.
                  </small>
                </div>
              </div>
            </div>
            <hr className="border-bottom-lite" />

            <div className="color-selection">
              <p className="subtitle">Choose a Color</p>
              <div className="d-flex">
                {product.colors?.map((color, index) => (
                  <div
                    style={
                      color === selectedColor
                        ? {
                            border: `1px solid ${color}`,
                            background: color,
                            borderRadius: "50%",
                            margin: "10px",
                            boxSizing: "border-box",
                            height: "45px",
                            width: "45px",
                          }
                        : {
                            margin: "10px",
                          }
                    }
                  >
                    <button
                      key={index}
                      className="colors"
                      style={{ background: color }}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color === selectedColor ? (
                        <IconContext.Provider
                          value={{
                            color: "white",
                            size: "20px",
                            className: "global-class-name",
                          }}
                        >
                          <MdDone />
                        </IconContext.Provider>
                      ) : null}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-bottom-lite" />

            <div className="size-selection">
              <p className="subtitle">Choose a Size</p>
              {product.sizes?.map((size, index) => (
                <button
                  key={index}
                  className={
                    size === selectedSize
                      ? "size-button selected"
                      : "size-button"
                  }
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <hr className="border-bottom-lite" />

            <div className="d-flex gap-2">
              <div className="d-flex modal-quantity justify-content-around">
                <button className="inc-btn" onClick={handleDecrease}>
                  -
                </button>

                <p>{quantity}</p>
                <button className="inc-btn" onClick={handleIncrease}>
                  +
                </button>
              </div>
              <div>
                <button
                  className="add-to-cart-button-page"
                  onClick={handleAddToCart}
                >
                  <p className="mt-2">
                    ${(product.price * quantity)?.toFixed(2)} Add To Cart
                  </p>
                </button>
              </div>
            </div>
          </div>

          {modalOpen && (
            <Modal
              product={product}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
            />
          )}

          <div className="d-grid mt-5">
            <p className="desc-small-line-text">Description</p>
            <div className="d-flex ">
              <div className="desc-small-line "></div>
              <div className="desc-long-line"></div>
            </div>
          </div>
          <div className="desc-section mt-5">
            <div>
              <p className="desc-title">Product Description</p>
              <p className="description">{product.description}</p>
            </div>
            <div>
              <p className="desc-title">Benefits</p>
              <ul>
                {product.benefits?.map((benefit) => (
                  <li key={benefit} className="d-flex">
                    <img src="/rightsign.svg" />
                    <p className="pt-3">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="desc-title">Product Details</p>
              <ul>
                {product.details?.map((detail) => (
                  <li key={detail} className="d-flex">
                    <img src="/rightsign.svg" className="pr-2" />
                    <p className="pt-3">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="desc-title">More Details</p>
              <ul>
                {product.moreDetails?.map((detail) => (
                  <li key={detail} className="d-flex">
                    <img src="/rightsign.svg" className="pr-2" />
                    <p className="pt-3">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>No product found..</div>
      )}
    </>
  );
};

export default ProductPage;
