// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, getDoc, query, where} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIDnMhCvpQHgIi3GMygbXZKJ-uoObPQxc",
  authDomain: "phostore-5d228.firebaseapp.com",
  projectId: "phostore-5d228",
  storageBucket: "phostore-5d228.appspot.com",
  messagingSenderId: "117484966033",
  appId: "1:117484966033:web:4471285b4359ebba586f30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getAllProducts(){
    //referimos a la colección
    const productsCollectionRef = collection(db, "products");

    const productSnap = await getDocs(productsCollectionRef)

     return productSnap.docs.map( (item) => {
        return {
        ...item.data(),
        id: item.id
        }
    });     
}

export async function getProduct(id) {
  const productsCollectionRef = collection(db, "products");
  const productRef = doc(productsCollectionRef,id)
  const productSnap = await getDoc(productRef)
  return {...productSnap.data(), id: productSnap.id};

}

export async function getProductsByCategory(categoryId){
  const docRef = collection(db,'products');
  const query = query(docRef,where("categoria","==",categoryId))
  const productSnap = await getDocs(query)
  
  return productSnap.docs.map( (item) => {
    return {
    ...item.data(),
    id: item.id
    }
}); 
}


export default db