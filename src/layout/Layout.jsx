import PropTypes from "prop-types";

import "./layout.scss";

import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer";

const Layout = ({ setScreen, children }) => {
  return (
    <div className="layout">
      <Header setScreen={setScreen} className="header"/>
      <main className="content">{children}</main>
      <Footer className="footer" />
    </div>
  );
};

Layout.propTypes = {
  setScreen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
