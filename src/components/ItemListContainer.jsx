import React , {useEffect, useState} from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from "../services/firestore"
import './loader.css';
import IndexImage from './IndexImage';



function ItemListContainer() {
  const [productsState, setProducts] = useState([]);
  const { categoryid } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => { /*Obtener del firebase los datos de los productos */
    getAllProducts().then(respuestaPromise => {
      setIsLoading(false);
      if (categoryid === undefined){
        setProducts(respuestaPromise)
      }else {
        getProductsByCategory(categoryid).then(respuesta => { /* Filtración por categoría */
          setProducts(respuesta);
        });
      }   
    });
  }, [categoryid]);
  
  
  return (
    <div>
      <IndexImage/>
      <div className="container px-5 py-8 mx-auto min-vh-100">
        <div className="d-flex flex-row m-2 flex-wrap justify-content-around">
          {isLoading ? <span className="loader position-absolute start-50 mt-3"></span> : <ItemList products={productsState}/>}
        </div>
      </div>
    </div>
    
  );
}

export default ItemListContainer;