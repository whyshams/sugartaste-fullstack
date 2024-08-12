import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

export default function ProductImages({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="image-container">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeOut",
            delay: 1.6,
            duration: 0.7,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="main-image"
          src={images[activeIndex]}
          alt="product"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ease: "easeOut",
          delay: 1.6,
          duration: 0.7,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="thumbnail-images mt-3"
      >
        <button onClick={handlePrevious} className="arrow-btn previous">
          <IoIosArrowBack />
        </button>

        {images?.map((image, index) => (
          <button
            key={image}
            onClick={() => setActiveIndex(index)}
            className={`thumbnail-btn ${
              index === activeIndex ? "active-thumbnail" : ""
            }`}
          >
            <img src={image} alt="" className="thumbnail" />
          </button>
        ))}
        <button onClick={handleNext} className="arrow-btn next">
          <IoIosArrowForward />
        </button>
      </motion.div>
    </>
  );
}
