import './App.css';
import Banner from './Components/Banner/banner';
import Menu from './Components/Menu/menu';
import Products from './Components/Products/products';

function App() {
  return (
    <div className="Container">
      <Menu></Menu>
      <div className="App">
        <Banner></Banner>
        <Products></Products>
      </div>
    </div>
  );
}

export default App;
