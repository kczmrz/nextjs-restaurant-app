import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store";
import { fetchData } from "@/redux/features/LoadDataSlice";
import { imgs } from "@/images";
import { Navbar,Footer } from "@/components";
import { describes, contact } from "@/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
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
      <>
      <Head>
         <title>FastFood FastWay!</title>
      </Head>
     <nav> 
       <Navbar/> 
     </nav>
     <main className="container">
      <div className='AboutUs'>
       <div className="AboutUs__header">About Us <hr className="line"/></div>
        <div className="AboutUs__info">  
          <div><Image src={imgs.cooks} alt="About us!" width={300} loading="lazy"/></div> 
          <div className="text">{describes[0].describe}</div>
        </div>
         <div>
         <div className="AboutUs__header">You need a job? <hr className="line"/></div>
            <div className="AboutUs__contact"> 
               <div className="OneContact"> <FontAwesomeIcon icon={faPhone}/> &nbsp;&nbsp;  {contact.PhoneNumber} </div>
               <div className="OneContact"> <FontAwesomeIcon icon={faAt}/> &nbsp;&nbsp;  {contact.Email} </div>
            </div>
         </div>
         <div className="+"> &nbsp;</div>
       </div>
     </main>
     <footer> 
         <Footer/>
     </footer>
     </>
   
    )
}