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
       <div className="product">
         <div className="info"> 
           <Image src={MenuImages[props.data.img].img} alt="Product Image" loading="lazy"/>
            <h2 className="product__title">{props.data.title}</h2>
            <p className="product__description">{props.data.description}</p>

            <div className="product__sel"> 
              <div> 
               <select defaultValue={1} className="product__list" onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setProductSize(e.target.value)}>
                  <option value={0}>Small</option>
                  <option value={1}>Normal</option>
                  <option value={2}>Big</option>
               </select>
              </div>  
              <div> 
                <div className="product__price">{displayPrice}pln</div>
              </div>
            </div>
            
          </div>
          <div className="button">
            <button className="product__btn" onClick={AddProductToCart}>Add to Cart</button>
          </div>
         </div>
     </div>
    )
}

export default OfferCard;



