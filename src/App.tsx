import React from "react";

import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        {/*     <Footer /> */}
      </header>
    </div>
  );
};

export default App;
