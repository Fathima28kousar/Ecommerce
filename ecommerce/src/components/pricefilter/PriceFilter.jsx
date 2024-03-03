// import {useState} from 'react'

// const PriceFilter = ({ products, onFilterChange }) => {
//     const [priceRange, setPriceRange] = useState([0, 100]);
  
//     const handleSliderChange = (e) => {
//         const value = parseInt(e.target.value, 10);
//         if (!isNaN(value)) {
//           setPriceRange([0, value]);
//         }
//       };
      
  
//     const handleFilterChange = () => {
//       onFilterChange(priceRange);
//     };
  
//     // Find the minimum and maximum product prices
//     const minProductPrice = Math.min(...products.map((product) => product.price));
//     const maxProductPrice = Math.max(...products.map((product) => product.price));
  
//     return (
//       <div>
//         <h2>Price Filter</h2>
//         <input
//           type="range"
//           min={15}
//           max={maxProductPrice}
//           value={priceRange[1]}
//           onChange={handleSliderChange}
//         />
//         <p>
//           Price Range: ${minProductPrice} - ${priceRange[1]}
//         </p>
//         <p>
//           Minimum Product Price: ${minProductPrice}
//         </p>
//         <p>
//           Maximum Product Price: ${maxProductPrice}
//         </p>
//         <button onClick={handleFilterChange}>Apply Filter</button>
//       </div>
//     );
//   };
  
//   export default PriceFilter;
  