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

    function agregar(){
        console.log(`Agregaste ${num} productos`)
    }


return (
       
            <div>
                <button onClick={restar} className="btn btn-dark">-</button>
                <span className="px-2">{num}</span>
                <button onClick={sumar} className="btn btn-dark">+</button>
                <button className="btn btn-success" onClick={agregar}>Agregar al Carrito</button>
            </div>
    );

}
export default ItemCount





