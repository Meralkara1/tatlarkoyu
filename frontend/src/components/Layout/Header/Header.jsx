import { useContext } from "react";
import Proptypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../../context/CartProvider";
import Logo from "../../../../public/logo-color.svg";
import "./Header.css";

const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);
  const user = localStorage.getItem("user");
  const { pathname } = useLocation();

  return (
    <header>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
                <img src={Logo} alt="logo" className="logo" />
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${
                        pathname === "/" && "active"
                      }`}
                    >
                      Tüm Katagoriler
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/products/Yemek"}
                      className={`menu-link ${
                        pathname === "/products/Yemekler" && "active"
                      }`}
                    >
                      Yemekler
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/products/İçecekler"}
                      className={`menu-link ${
                        pathname === "/products/İçecekler" && "active"
                      }`}
                    >
                      İçecekler
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/products/Kozmatik"}
                      className={`menu-link ${
                        pathname === "/products/Kozmatik" && "active"
                      }`}
                    >
                      Kozmatik
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/products/El Emeği"}
                      className={`menu-link ${
                        pathname === "/products/El Emeği" && "active"
                      }`}
                    >
                      El Emeği
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${
                        pathname === "/contact" && "active"
                      }`}
                    >
                      İletişim
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/auth"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                <div className="header-cart">
                  <Link to={"/cart"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
                {user && (
                  <button
                    className="search-button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Çıkış yapmak istediğinize emin misiniz?"
                        )
                      ) {
                        {
                          localStorage.removeItem("user");
                          window.location.href = "/";
                        }
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setIsSearchShow: Proptypes.func,
};
