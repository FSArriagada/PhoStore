import React , {useEffect, useState} from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from "../services/firestore"
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
        getProductsByCategory(categoryid).then(respuesta => {
          setProducts(respuesta);
        });
      }   
    });
  }, [categoryid]);
  
  
  return (
    
    <div className="container px-5 py-8 mx-auto min-vh-100">
      <div className="d-flex flex-row m-2 flex-wrap justify-content-around">
        {isLoading ? <span className="loader position-absolute top-50 start-50"></span> : <ItemList products={productsState}/>}
      </div>
    </div>
    
  );
}

export default ItemListContainer;