import PropTypes from "prop-types";

import "./layout.scss";

import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header className="header"/>
      <main className="content">{children}</main>
      <Footer className="footer" />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
