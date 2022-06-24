import React, {useState} from "react";

function ItemCount (props){
    const [num, setNum] = useState(props.initial);
    
    function sumar(){
        if (num < props.stock){
            setNum(num + 1);
        }
        
    }
    
    function restar(){
        if (num > props.initial){
            setNum(num - 1);
        }
    }


return (
    <div class="container">
        <div class="card border-dark mb-4">
            {/* <img src="${celular.img}" class="card-img-top" alt="..."/> */}
            <div class="card-body">
                <h5 class="card-title">Producto</h5>
                <p class="card-text">$ Precio</p>
                <button onClick={restar} class="btn btn-dark">-</button>
                <span class="px-2">{num}</span>
                <button onClick={sumar} class="btn btn-dark">+</button>
                <button class="btn btn-success">Agregar al Carrito</button>
            </div>
        </div>
    </div>
    );

}
export default ItemCount





