import React , {useEffect, useState} from 'react'
import productsDB from '../data/products';
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';

function getProducts(categoryid){
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      if (categoryid !== undefined){
        const categoryFiltered = productsDB.filter ((product) => {
          return product.categoria === categoryid;
        });
        resolve (categoryFiltered);
      } else {
      resolve (productsDB);
      }
    }, 1000);
  });
}

function ItemListContainer({props}) {
  const [productsState, setProducts] = useState([]);
  const { categoryid } = useParams();
  useEffect(() => {
    getProducts(categoryid).then(respuestaPromise => {
      setProducts(respuestaPromise);
    });
  }, [categoryid]);
  
  return (
    
    <div className="container px-5 py-8 mx-auto">
      <div className="d-flex flex-row m-2 flex-wrap justify-content-around">
        <ItemList products={productsState}/>
      </div>
    </div>
    
  );
}

export default ItemListContainer;