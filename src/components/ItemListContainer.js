import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';

const ItemListContainer = ({ greeting }) => {
  const [name, setName] = useState('Cargando...');

  setTimeout(() => {
    // name = 'Cargo todo'; NO HACER NUNCA
    setName('Carga completa')
  }, 5000)

  useEffect(() => {
    console.log('---------------El componente esta naciendo (mount)---------------');

    return () => {
      console.log('---------------El componente esta muriendo (dismount)---------------');
    }
  }, []); // [] esta naciendo

  useEffect(() => console.log('Se esta actualizando el name (change)'), [name]);

  useEffect(() => console.log('Se esta actualizando algo (change)'));

  console.log('Render de ItemListContainer');
  return (
    <Container>
      <h1>Productos</h1>
      <h3 className="greeting">{greeting}</h3>
      <p>{name}</p>
    </Container>
  );
}
 
export default ItemListContainer;
