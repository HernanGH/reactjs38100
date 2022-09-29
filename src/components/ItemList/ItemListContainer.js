import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
const products = [
  {id: 1, name:'pizza', description:'string', stock:'number'},
  {id: 2, name:'hamburguesa', description:'string', stock:'number'},
  {id: 3, name:'ensalada', description:'string', stock:'number'},
  {id: 4, name:'empanadas', description:'string', stock:'number'}
]

const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams();
  
  useEffect(() => {
    console.log(categoryName);
  }, [categoryName])

  return (
    <Container>
      <h1>Productos</h1>
      <h3 className="greeting">{greeting}</h3>
      <ItemList products={products} />
    </Container>
  );
}
 
export default ItemListContainer;
