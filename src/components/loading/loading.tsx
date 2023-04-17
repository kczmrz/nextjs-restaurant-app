import { imgs } from "@/images";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { useEffect, useState } from "react";

/* This is loading script */
/* When redux  is still downloading data from MongoDB - loading is true */
/* When data has been added to redux - Loading is false, but I'm added 1s delay for "aesthetic" */
export default function Loading() 
{
    const loadingFromRedux = useSelector((state:RootState) => state.Data.products);
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(()=> {
     setTimeout(()=> {
        if(loadingFromRedux.length > 0) {
            setLoading(false);
        }
       
     }, 900);

    }, [loadingFromRedux])

    return(
    <div> 
       {loading
       ?  <div className="loading">
             <div className="loading__loader"><Image src={imgs.burger} alt="burger" width={120} height={120}/> </div>
         </div>
         
       : <div> {null} </div>
       }
    </div>
    )
    
   
}




/*

export default function Loading() 
{
    const loadingFromRedux = useSelector((state:RootState) => state.Data.loading);
    const [loading, setLoading] = useState<Boolean>(true);
    useEffect(()=> {
     setTimeout(()=> {
        setLoading(false);
     }, 2000)
    }, [loadingFromRedux])
    if (loading) return(
        <div className="loading">
            <div className="loading__loader"><Image src={imgs.burger} alt="burger" width={120} height={120}/> </div>
        </div>
    )
    else return null;
}  */