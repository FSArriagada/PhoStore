import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer descripcion="Productos"/>}/>
            <Route path="/home" element={<ItemListContainer descripcion="Productos"/>}/>
            <Route path="/category/:categoryid" element={<ItemListContainer descripcion ="Categoria de Productos"/>}/>
            <Route path="/product/:productid" element={<ItemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
