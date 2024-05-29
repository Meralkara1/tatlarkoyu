import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "./Products.css";
import { message } from "antd";
import { useParams } from "react-router-dom";

function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
};

function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}

PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

// eslint-disable-next-line react/prop-types
const Products = () => {
  const [products, setProducts] = useState([]);
  const { Categoryname } = useParams();

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        console.log("categoryName: " + Categoryname);
        const response = await fetch(
          Categoryname
            ? `${apiUrl}/api/products/allproducts/${Categoryname}`
            : `${apiUrl}/api/products/`
        );

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchProducts();
  }, [apiUrl,Categoryname]);

  const sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="products">
      <div className="container">
        <div className="product-wrapper product-carousel">
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <ProductItem productItem={product} key={product._id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;
