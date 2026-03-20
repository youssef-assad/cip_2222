import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar"; // Ensure you have the SideBar component
import "./listproducts.css"; // Ensure you have the listproducts.css file
import { Link, useParams } from "react-router-dom";
import Products from '../../products.json'

function ListProducts() {
  const { cate } = useParams();
  const [selectedSector, setSelectedSector] = useState(cate || "");

  useEffect(() => {
    setSelectedSector(cate || "");
  }, [cate]);

  const filteredProducts = selectedSector
    ? Products.filter(
        (p) => p.categorie.toLowerCase() === selectedSector.toLowerCase()
      )
    : Products;

  return (
    <div className="container product-display mt-4">
      <SideBar
        setSelectedSector={setSelectedSector}
        selectedSector={selectedSector}
      />
      <div className="products-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p, i) => (
            <Link className="box-product" key={i} to={`/products/${p.id}`}>
              <h3>{p.title}</h3>
              <img
                src={p.images[0]}
                alt={`image de ${p.title}`}
                className="images"
              />
              <div className="bottom-product">
                <h4>{p.secteur}</h4>
                <button className="detail-button">Détail</button>
              </div>
            </Link>
          ))
        ) : (
          <p>No products found for the selected category.</p>
        )}
      </div>
    </div>
  );
}

export default ListProducts;
