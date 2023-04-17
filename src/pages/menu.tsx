import Head from "next/head";
import { Navbar,Footer } from "@/components";
import axios from "axios";
import { OfferCard, ExtraCard } from "@/components/cards";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { fetchData } from "@/redux/features/LoadDataSlice";
import { useEffect } from "react";

export default function Menu( { menu }: any )
{
    /* Products have been loaded from Redux :-) */

    /* All scripts for redux/add to cart/display alert 
    are in the file: components/cards/offercard.tsx */

    /* In index and menu I added loading-data from MONGODB script */
    
    const FetchMyData = fetchData() as any;
 /* When we want to put "fetchData()" in dispatch() - Typescript will have a problem */
 
    const products = useSelector((state: RootState) => state.Data.products);
    const extras = useSelector((state: RootState) => state.Data.extras);

    const dispatch = useDispatch();
    useEffect(()=> {
        if(products.length == 0)
        {
          dispatch(FetchMyData);
        }
        else return;
      }, []);


    return(
        <div>
           <Head> <title>Order online </title></Head>
           <Navbar/>
           <div className="container">
               <div className="content">
                <p className="MenuParagraph">Menu</p>
                   <div className="productCards">
                    {products.map((i:any)=> (
                        <OfferCard key={i._id} data={i}/>
                       ))}
                   </div>
                   <p className="MenuParagraph">Extras</p>
                   <div className="productCards">
                    {extras.map((i:any)=> (
                        <ExtraCard key={i._id} data={i}/>
                       ))}
                   </div>
               </div>
           </div>
           <Footer/>
        </div>
    )
}




/* If you prefer load products from MongoDB server, but I don't prefer this option */
/* Because app is too slow in my opinion */
/*
export const getServerSideProps = async ()=> {
      const res = await axios.get("http://localhost:3000/api/products");
      
      return {
        props: {
            menu: res.data
        }
      }
}  */