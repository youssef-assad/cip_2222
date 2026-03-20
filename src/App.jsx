import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/Navbar/NavBar";
import SubNav from "./components/subnav/SubNav";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import CustomAlert from "./CustomAlert";
import Product from "./pages/Product/Product";
import ListProducts from "./pages/Product/ListProducts";
import ErrorBoundary from "./ErrorBondary";

function App() {
  return (
    <div className="cip-container">
      <BrowserRouter>
        <SubNav />
        <NavBar />
        <CustomAlert />
        <ErrorBoundary />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/list_products/:cate" element={<ListProducts />} />
          <Route path="/list_products" element={<ListProducts />} />
        </Routes>
        <Link to="tel:+212661946011" className="call-link">
          <button className="icon-phone fixedcon" />
          <span className="hover-text">call now</span>
        </Link>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
