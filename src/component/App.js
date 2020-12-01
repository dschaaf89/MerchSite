import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ItemController from "./ItemController";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div id="header">
          <Header />
        </div>
        <div id="body">
          <ItemController />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
