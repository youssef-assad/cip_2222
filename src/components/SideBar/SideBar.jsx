import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "./Products";
import PropTypes from "prop-types";

function SideBar({ setSelectedSector, selectedSector }) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = Products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchValue]);

  const sectors = [
    "medical",
    "Carbon Steel Series",
    "Galvanized Steel Series",
    "Alloy Steel Series",
    "Copper Product",
    "Aluminum Product",
  ];

  return (
    <aside className="sidebar">
      <div className="custom-filter-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <span className="icon-search" />
      </div>
      <div className="filtered-products">
        {searchValue &&
          filteredProducts.map((product, i) => (
            <Link
              key={i}
              to={`/products/${product.id}`}
              className="filtered-item"
            >
              <div className="filtered-item-content">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="filtered-item-image"
                />
                <p className="filtered-item-title">{product.title}</p>
              </div>
            </Link>
          ))}
      </div>
      <h2>Product Display</h2>
      <ul className="sidebar-menu">
        {sectors.map((sector, index) => (
          <li key={index}
            className={`sector-button ${selectedSector === sector.toLowerCase() ? "active" : ""}`}
            onClick={() => setSelectedSector(sector)}
          >
            {sector}
          </li>
        ))}
      </ul>
      <div className="quote-form">
        <h2>Get A Quote</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Tel" />
          <input type="email" placeholder="Your E-mail" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </aside>
  );
}

SideBar.propTypes = {
  setSelectedSector: PropTypes.func.isRequired,
  selectedSector: PropTypes.string.isRequired,
};

export default SideBar;
