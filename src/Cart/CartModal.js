import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { getCartItems, getToTalPrice } from "../Redux/cartSlice";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import swal from 'sweetalert';


 




const Modal = ({show, setShow}) => {
    const  cartItems = useSelector(getCartItems);
   const totalPrice = useSelector(getToTalPrice);



    return  (
      <>
      {show}
        <div className='darkBG'  onClick={() => setShow(false)}/>
        <div className='centered'>
          <div className='modal' >
            <div className='modalHeader'>
    
              <h4 className='heading'>Your Shopping Bag</h4>
            </div>
            
          
            <button className='closeBtn' onClick={() => setShow(false)}>
              <RiCloseLine/>
            </button>
       
    
          <div className='modalContent'> {cartItems.map ((cartItem,index)=><CartItem key={index} cartItem={cartItem}/>)}
                  <h3>Total: $ {totalPrice}</h3>
                          </div>
    
            <div className= 'modalActions' >
              <div className= 'actionsContainer'>
                <button className= 'deleteBtn' 
                onClick={()=>{swal({
                    text:"We are not a real store 😉",
                    button: "Got It!"
                })} }>
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Modal;