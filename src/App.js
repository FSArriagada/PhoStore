import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';

//import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
     {/* <ItemListContainer descripcion="Productos"/>*/}
     <ItemDetailContainer/>
    </div>
    
  );
}

export default App;
