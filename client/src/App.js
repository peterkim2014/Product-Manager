import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/views/Main';
import ProductDetail from './components/ProductDetail';
import ProductUpdate from './components/ProductUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path = "/home" default
            element = {<Main />}
          />
          <Route 
            path = "/product/:id"
            element = {<ProductDetail/>}
          />
          <Route 
            path = "/product/edit/:id"
            element = {<ProductUpdate />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
