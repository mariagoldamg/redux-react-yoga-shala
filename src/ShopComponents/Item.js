import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/cartSlice";

const Item =({item})=>{
    const [quantity,setQuantity] = useState(1);
const dispatch = useDispatch();
    return (
        <div>
            <img alt="shop" src = {`${item.img}.jpeg`}/>
            <div className="item">
                <div className="itemName">
            <h4> { item.name } </h4></div>
            <p> ${ item.price } </p>
            <ChangeQuantity quantity={quantity} setQuantity ={setQuantity}/>
            <br></br>
            <button className="addToCart" onClick={()=> dispatch(addItemToCart({item,quantity}))}>Add to Cart</button>

            </div>
        </div>
    )
}

export default Item;