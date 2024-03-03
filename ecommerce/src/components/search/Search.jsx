import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../home/button/Button";
import PriceFilter from "../products/PriceFilter";
import Productlist from "../products/productlist/Productlist";
import styles from "./Search.module.css";

const Search = ({ items }) => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [itemFound, setItemFound] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(items);

  const handleFilterChange = (priceRange) => {
    const filtered = items.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // Check if the search input is not empty
    if (search.trim() !== "") {
      // Find the first item that matches the search query
      const searchedItem = items.find((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

      if (searchedItem) {
        // Navigate to the product detail page with the id of the searched item
        history.push(`/productDetail/${searchedItem.id}`);
      } else {
        // Set itemFound state to false if the searched item is not found
        setItemFound(false);
      }
    } else {
      // If the search input is empty, set itemFound to true (show the original product list)
      setItemFound(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit" icon="arrow"></Button>
        </form>
        <PriceFilter items={items} onFilterChange={handleFilterChange} />
      </div>
      {itemFound ? (
        <Productlist items={filteredProducts} />
      ) : (
        <div className={styles.notFound}>
          <h1>Product not found!</h1>
        </div>
      )}
    </div>
  );
};

export default Search;
