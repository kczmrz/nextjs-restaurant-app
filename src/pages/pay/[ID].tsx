import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";
import { CartItem } from "@/redux/features/cartSlice";
import Head from "next/head";
import Link from "next/link";
import { URL } from "@/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';


interface ClientInfo {
    ID: any;
    NameAndSurName: string;
    PhoneNumber: number;
    EMail: string;
    City: string;
    Street: string;
    HomeNumber: number;
    PostCode: number;
    Price: number;
    Order: CartItem[];
}

export default function Post () {
    const products = useSelector((state: RootState) => state.Data.products);

    useEffect(()=> {
      if(products.length == 0)
      {
        /* Back to index, when redux has not loaded data */
        window.location.href = '/';
      }
      else return;
    }, []);

    const [posted, setPosted] = useState<boolean>(false);
    /* router */
    const router = useRouter();
    const { ID } = router.query;
    
    /* Redux variables */
    const FullCost = useSelector((state: RootState)=> state.Cart.totalPrice)
    const OrderFromCart = useSelector((state: RootState)=> state.Cart.items)
    
    /*Alert */
    const notify = () => toast.success("The order hasn't been placed. This is GH-Pages demo");

    const handleSubmit = async (event: any) => {
       setPosted(true);
       notify();
    }
    
    
   if (!posted) return(
  <div> 
    <Head><title>Finalization</title></Head>
    <div className="container">
        <div className="content">
            <div className="payform">
            <p className="payform__heading">Finalization</p>
             <div className="payform__heading__section"> 
                 <p className="payform__heading__price">Price: <b>{FullCost}pln</b></p>
                 <Link className="payform__heading__back" href="/cart"><FontAwesomeIcon icon={faPencil}/>Edit order</Link>
               </div>
                 <div className="payform__delivery">
                   <form onSubmit={handleSubmit} method="post">
                        <label>Name and Surname </label>
                        <input type="text" className="payform__input"  id="PersonInfo" name="PersonInfo" required></input>

                        <label>Phone Number:</label>
                        <input type="number" maxLength={9} className="payform__input" id="PhoneNmbr" name="PhoneNmbr" required></input>

                        <label>E-mail:</label>
                        <input type="string" className="payform__input" id="email" name="email" required ></input>
                        <div className="CityForm"> 
                           <label>Your city:</label>
                           <input type="string" className="payform__input" id="city" name="city" required ></input>
                           
                           <label>Post code:</label>
                           <input type="number" className="payform__input" id="postcode" name="postcode" required></input>

                           <label>Street:</label>
                           <input type="string" className="payform__input" id="street" name="street" required></input>
                           <label>House number:</label>
                           <input type="string" className="payform__input" id="housenmbr" name="housenmbr" required></input>
                        </div>
                        <p className="payform__paymentInfo">Payment only on delivery</p>
                        <button type="submit" className="payform__submit">OKEY</button>
                     </form>
                     
                 </div>
                 
            </div>
        </div>
    </div>
</div>)
if(posted) return (
  <div>
    <Head><title>Thank You</title></Head>
     <div className="container">
        <div className="content">
             <div className="Thanks">
                <div className="Thanks__Card"> 
                    <p className="Thanks__Card__header">Thank you!</p>
                    <p className="Thanks__Card__mobile"><FontAwesomeIcon className="Thanks__Card__mobile__elem" icon={faMobileScreen}/></p>
                    <p className="Thanks__Card__info">When your meal is ready to go - you will be notified by SMS. </p> 
                 </div> 
             </div>
        </div>
      </div>
  </div>)
}



/* https://nextjs.org/docs/guides/building-forms  */