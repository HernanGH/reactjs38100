import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FavoritosContext from "../contexts/FavoritosContext";
import { getProduct } from "../utils/products";

const Favoritos = () => {
  const [product, setProduct] = useState()
  const data = useContext(FavoritosContext);
  console.log(data);
  // console.log(agregarAFavoritos);

  useEffect(() => {
    getProduct(1)
      .then((data) => {
        setProduct(data)
      })
      .catch(error => console.warn(error))
  }, [])

  return (
    <Container>
      <h1>Productos Favoritos</h1>
      {/* <button onClick={() => agregarAFavoritos(product)}>Agregar a Fav</button> */}
    </Container>
  );
}
 
export default Favoritos;