import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  console.log('hola esto esta funcionando');
  const value = { price: 100, title: 'asd'};

  const saludar = () => console.log('Holaaa!!')
    return (
      <>
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos a mi tienda'} />
      </>
    );
}

export default App;
