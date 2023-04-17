import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store";
import { fetchData } from "@/redux/features/LoadDataSlice";
import { imgs } from "@/images";
import { Navbar,Footer } from "@/components";
import { describes } from "@/Config";
export default function Work()
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
        <Head>
         <title>FastFood FastWay!</title>
       </Head>
       <Navbar/> 
         <div className='container' id="index_one">
           <div className='content'>
             <div className='Information'>
               <div className='Information__container one'> <Image src={imgs.indexImage} alt="Cooking for you!"/> </div>
               <div className='Information__container two'> 
                 Join to our team!
                <div className='two__description'>
               {describes[1].describe}
                 </div>
                 
               </div>
               <div className='Information__container'> </div>
             </div>
             </div>
          </div>
       <Footer/>
     </div>
    )
}