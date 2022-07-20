import React , {useEffect, useState} from 'react'
import ItemDetail from '../components/ItemDetail'
import {useParams} from 'react-router-dom'
import { getProduct } from '../services/firestore';


function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const {productid} = useParams();
  useEffect(() => {
    getProduct(productid).then(respuestaPromise => {
      setProduct(respuestaPromise);
    });
  }, [productid]);
  
  return (
    <div className="container px-5 py-8 mx-auto">
      <div className="d-flex flex-row m-2 flex-wrap justify-content-around">
        <ItemDetail product={product}/>
      </div>
    </div>
  );
}

export default ItemListContainer;