import { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Proptypes from "prop-types";
import Search from "../components/Modals/Search/Search";

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isDialogShow, setIsDialogShow] = useState(false);

  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog")
      ? JSON.parse(localStorage.getItem("dialog"))
      : localStorage.setItem("dialog", JSON.stringify(true));

    setTimeout(() => {
      setIsDialogShow(dialogStatus);
    }, 2000);
  }, []);

  return (
    <div className="main-layout">
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
