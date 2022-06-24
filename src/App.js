import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer descripcion="Productos"/>
      <ItemCount stock={10} initial={1}/>
    </div>
    
  );
}

export default App;
