import React , {useEffect, useState} from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import { getAllProducts } from "../services/firestore"
import './loader.css';



function ItemListContainer() {
  const [productsState, setProducts] = useState([]);
  const { categoryid } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getAllProducts().then(respuestaPromise => {
      setIsLoading(false);
      if (categoryid === undefined){
        setProducts(respuestaPromise)
      }else {
        let productFind = respuestaPromise.filter((respuesta) => respuesta.categoria === categoryid)
        setProducts(productFind);
      }
    });
  }, [categoryid]);
  
  
  return (
    
    <div className="container px-5 py-8 mx-auto">
      <div className="d-flex flex-row m-2 flex-wrap justify-content-around">
        {isLoading ? <span className="loader"></span> : <ItemList products={productsState}/>}
      </div>
    </div>
    
  );
}

export default ItemListContainer;