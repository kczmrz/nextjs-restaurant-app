import Head from "next/head";
import { Navbar,Footer } from "@/components";
import { useSelector } from "react-redux";
import { RootState  } from '../redux/store/store';
import { CartCard } from "@/components/cards";
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";
import { useEffect } from "react";

export default function Cart()
{
    const userCart = useSelector((state: RootState) => state.Cart.items);
    const TotalPrice = useSelector((state: RootState) => state.Cart.totalPrice);
    const products = useSelector((state: RootState) => state.Data.products);

    useEffect(()=> {
      if(products.length == 0)
      {
        /* Back to index, when redux has not loaded data */
        window.location.href = '/';
      }
      else return;
    }, []);
    return(
        <div>
           <Head> <title>Join to us! </title></Head>
           <Navbar/>
           <div className="container">
               <div className="content">
                <div className="ShoppingCart">
                  <p className="ShoppingCart__heading">Your cart:</p>
                  {userCart.map((product, index) => 
                  {return <CartCard key={index} data={product}/> } 
                  )} 
                 </div>
                 <div className="TotalCost">
                  <div className="TotalCost__form"> 
                    <div className="TotalCost__space"><div className="TotalCost__text">Price: <span className="TotalCost__text__p"> {TotalPrice}pln</span></div></div>
                    <div className="TotalCost__space"><Link className="TotalCost__btn" href={"/pay/" + uuidv4()}> Order </Link></div>

                  </div>
                 </div>
               </div>       
          </div>
          <Footer/>
        </div>
    )
}