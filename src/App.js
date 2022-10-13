import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import MapComponent from './components/MapComponent';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Events from './components/Events';
import Intercambiabilidad from './components/Intercambiabilidad';
import DarkProductList from './components/DarkProductList';
import CacheContext, { CacheProvider } from './contexts/CacheContext';
import Condionales from './components/Condionales';
import FavoritosContext, { FavoritosProvider } from './contexts/FavoritosContext';
import Favoritos from './components/Favoritos';
import { doc, getFirestore, getDoc, collection, getDocs } from 'firebase/firestore';

function App() {
    // acceso a un documento especifico -> detail
    useEffect(() => {
      // obtenemos la base de datos
      const database = getFirestore();

      // obtener referencia al documento
      const itemReference = doc(database, 'items', 'jbjM5mU1VJIPOexaXUIn');

      // obtener el documento apartir del a referencia
      getDoc(itemReference)
        .then((snapshot) => {
          // preguntamos si exite este documento
          if(snapshot.exists()) {
            // armamos un objeto literal con el id y los demas campos del documento
            const item = {
              id: snapshot.id,
              ...snapshot.data()
            };
            console.log(item);
          }
        })
        .catch(error => console.warn(error))

    }, []);

    // acceso a una coleccion -> list
    useEffect(() => {
      // obtenemos la base de datos
      const database = getFirestore();

      // obtenemos la refencia a la collecion items
      const collectionReference = collection(database, 'items');

      // obtenemos los datos apartir de la referencia
      getDocs(collectionReference)
        .then((snapshot) => {
          // armamos un lista de objetos literales con los id y los demas campos de cada documento
          const list = snapshot
            .docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data()
            }));
          console.log(list);
        })
        .catch(error => console.warn(error))
    }, []);

    return (
      <BrowserRouter basename='/reactjs38100'>
        <CacheProvider>
          <NavBar />
          {/* <Events /> */}
          {/* <Intercambiabilidad /> */}
          {/* <DarkProductList /> */}
          {/* <Condionales /> */}
          <FavoritosProvider>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/favs' element={<Favoritos />} />
            </Routes>
          </FavoritosProvider>
        </CacheProvider>
      </BrowserRouter>
    );
}

export default App;
