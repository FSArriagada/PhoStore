import React , {useEffect, useState} from 'react'
import productsDB from '../data/products';
import ItemDetail from '../components/ItemDetail'

function getProduct(){
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      resolve (productsDB);
    }, 2000);
  });
}

function ItemListContainer() {
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    getProduct().then(respuestaPromise => {
      setProduct(respuestaPromise[0]);
    });
  }, []);
  
  return (
    <div className="container px-5 py-8 mx-auto">
      <div className="d-flex flex-row m-2 flex-wrap justify-content-around">
        <ItemDetail product={product}/>
      </div>
    </div>
  );
}

export default ItemListContainer;