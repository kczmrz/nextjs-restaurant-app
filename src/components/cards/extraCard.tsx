import Image from "next/image";
import { ExtrasImages } from "@/images/Extras";
import { useState, useEffect } from "react";
import { IExtras } from '../../mongodb/models/extras';
import { CartItem, AddToCart, CheckCart, UpdatePrice } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface extraCard {
   data: IExtras;
}


/** In my DB (MongoDB) images are numbers
 * in images/Meals/index.ts <--- MenuImages is an array 
 * MenuImages[value from props].img
 */

const ExtraCard = (props:extraCard) =>
{ 
   /*Alerts */
   const notify = () => toast.success("Item has been added to cart!");
   
   const dispatch = useDispatch();
   
   const [displayPrice, setDisplayPrice] = useState<number>(props.data.price);
  
   
/* Function to check whether the basket is empty or full */   
   const CartState = () => {
      dispatch(CheckCart());
   }
   /* Function when we click a button */
   const AddProductToCart = () => {
     dispatch(
      AddToCart({
         id: uuid(),
         title: props.data.title,
         price: displayPrice })
     );
     dispatch(UpdatePrice());
     CartState();
     notify();
   }
    return(
      <div>
      <div className="product">
        <div className="info"> 
          <Image src={ExtrasImages[props.data.img].img} alt="Product Image" loading="lazy"/>
           <h2 className="product__title">{props.data.title}</h2>
           <p className="product__description">{props.data.description}</p>
           
           <p className="product__price">{displayPrice}pln</p>
         </div>
         <div className="button">
           <button className="product__btn" onClick={AddProductToCart}>Add to Cart</button>
         </div>
        </div>
    </div>
    )
}

export default ExtraCard;



