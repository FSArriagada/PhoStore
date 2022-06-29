import React , {useEffect, useState} from 'react'
import productsDB from '../data/products';
import ItemList from '../components/ItemList'

function getProducts(){
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      resolve (productsDB);
    }, 2000);
  });
}


function ItemListContainer(props) {
  const [productsState, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts().then(respuestaPromise => {
      setProducts(respuestaPromise);
    });
  }, []);
  
  return (
    <div className="container px-5 py-8 mx-auto">
      <div className="d-flex flex-row m-2 flex-wrap justify-content-around">
        <ItemList products={productsState}/>
      </div>
    </div>
  );
}

export default ItemListContainer;