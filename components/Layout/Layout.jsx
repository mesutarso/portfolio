import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout({ children }) {
  return (
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  );
}
