import Image from "next/image";
import { MenuImages } from "@/images/Products";
import { useState, useEffect } from "react";
import { IProducts } from "@/mongodb/models/product";
import { CartItem, AddToCart, CheckCart, UpdatePrice } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import { customLoader } from "@/images/Extras";

interface offerCard {
   data: IProducts;
}


/** In my DB (MongoDB) images are numbers
 * in images/Meals/index.ts <--- MenuImages is an array 
 * MenuImages[value from props].img
 */

const OfferCard = (props:offerCard) =>
{ 
   /*Alerts */
   const notify = () => toast.success("Item has been added to cart!");
   
   const dispatch = useDispatch();
   /* In product-model we have a 3 "sizes" of product and this simple script
   manages it */
   const [productSize, setProductSize] = useState<any>(1);
   const [displayPrice, setDisplayPrice] = useState<number>(0);
   useEffect(() => {
      if(productSize == 0) {setDisplayPrice(props.data.price[0].small);}
      if(productSize == 1) {setDisplayPrice(props.data.price[0].normal);}
      if(productSize == 2) {setDisplayPrice(props.data.price[0].big);}
   }, [productSize]);
   
/* Function to check whether the basket is empty or full */   
   const CartState = () => {
      dispatch(CheckCart())
   }
   /* Function when we click a button */
   const AddProductToCart = () => {
     dispatch(
      AddToCart({
         id: uuid(),
         title: props.data.title,
         size: productSize,
         price: displayPrice })
     );
     dispatch(UpdatePrice());
     CartState();
     notify();
   }
    return(
    <div>
       <div className="productCard">
          <div className="productCard__image">
            <Image className="productCard__image__img"  src={MenuImages[props.data.img].img} alt={props.data.title} placeholder="blur"/> 
          </div>

          <div>
            <h1>{props.data.title}</h1>
            <div className="productCard__description">  
               {props.data.description}
            </div>
            <br/>
            <select defaultValue={1} className="productCard__list" onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setProductSize(e.target.value)}>
               <option value={0}>Small</option>
               <option value={1}>Normal</option>
               <option value={2}>Big</option>
            </select>  
            <h1>{displayPrice}&nbsp;pln </h1>
            <button className="productCard__buyBtn" onClick={AddProductToCart}>Add to cart</button>
          </div>
        
        </div>
     </div>
    )
}

export default OfferCard;



