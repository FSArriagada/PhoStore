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
       
            <div className="d-flex justify-content-center">
                <button onClick={restar} className="btn btn-dark mx-2">-</button>
                <span className="mx-2 align-self-center fs-5">{num}</span>
                <button onClick={sumar} className="btn btn-dark mx-2">+</button>
                <button onClick={() => props.onAdd(num)} className="btn btn-success mx-2"><i className="fa-solid fa-cart-plus"></i></button>
            </div>
    );

}
export default ItemCount





