import { useContext, useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { getAllProducts } from "../utils/products";
import './DarkProductList.css';

const Item = ({product}) => {
  const isDarkMode = useContext(ThemeContext);
  console.log(isDarkMode);
  const className = isDarkMode ? 'item-dark' : '';

  return (
    <h4>
      <li className={className}>
        {product.title}
      </li>
    </h4>
  )
}

const List = ({products}) => {
  return (
    <>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </>
  )
}

const DarkProductList = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.warn(error))
  }, [])

  const className = isDarkMode ? 'container-dark' : '';

  return (
    <div className={className}>
      <h1>Lista de Productos</h1>
      <ThemeContext.Provider value={isDarkMode}>
        <List products={products} />
      </ThemeContext.Provider>
    </div>
  );
}
 
export default DarkProductList;