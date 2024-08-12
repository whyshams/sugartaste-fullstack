import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
        <img className="main-image" src={images[activeIndex]} alt="product" />
      </div>
      <div className="thumbnail-images mt-3">
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
      </div>
    </>
  );
}
