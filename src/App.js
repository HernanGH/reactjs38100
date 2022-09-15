import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('hola esto esta funcionando');
  const value = { price: 100, title: 'asd'};

  const saludar = () => console.log('Holaaa!!')

  return (
    <>
      <NavBar />
      <div className="App">
        HOLA CODERS
      </div>
      <div className="App">
        CHAU CODERS
      </div>
      <MyComponent name='coder' value={value} saludar={saludar}>
        CONTENIDO INTERNO DEL COMPONENTE MYCOMPONENT
        <h1>ASD</h1>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </MyComponent>
    </>
  );
}

export default App;
