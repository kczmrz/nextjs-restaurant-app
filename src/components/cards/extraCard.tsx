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
       <div className="ExtraCard">
         <div className="ExtraCard__sections">
          <div className="ExtraCard__image">
            <Image className="ExtraCard__image__img" src={ExtrasImages[props.data.img].img} alt={props.data.title} placeholder="blur" /> 
          </div>

          <div className="ExtraCard__Info">
            <p className="ExtraCard__title">{props.data.title}</p>
            <div className="ExtraCard__description">  
               {props.data.description}
            </div>
            <br/>
           
            <h1>{displayPrice}&nbsp;pln </h1>
           </div>
          </div>
          <button className="ExtraCard__buyBtn" onClick={AddProductToCart}>Add to cart</button>

        </div>
     </div>
    )
}

export default ExtraCard;



