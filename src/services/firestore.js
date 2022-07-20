// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, getDoc} from "firebase/firestore"
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


    const docSnapshot = await getDocs(productsCollectionRef)

    const dataProducts = docSnapshot.docs.map( (item) => {
        const product = {
        ...item.data(),
        id: item.id
    }
    return product
    });
    return dataProducts;
    
    
}
export async function getProduct(id) {
  const productsCollectionRef = collection(db, "products");
  const docRef = doc(productsCollectionRef,id)
  const docSnapshot = await getDoc(docRef)
  return docSnapshot.data();

}

export async function getAllProductsByCategory(id){
  
}

export default db