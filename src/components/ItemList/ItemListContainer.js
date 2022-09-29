import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../utils/products';

const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    console.log(categoryName);
  }, [categoryName])

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.warn(error))
  }, [])

  return (
    <Container>
      <h1>Productos</h1>
      <h3 className="greeting">{greeting}</h3>
      <ItemList products={products} />
    </Container>
  );
}
 
export default ItemListContainer;
