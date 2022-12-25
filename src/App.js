import "./App.scss";
// import "./assets/";
import "swiper/swiper.min.css";

import { BrowserRouter } from "react-router-dom";
import RoutesCustom from "./config/Routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesCustom />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
