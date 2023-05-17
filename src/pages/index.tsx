import { Navbar, Footer } from '@/components';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import { describes } from '@/Config';
import { useDispatch  }  from 'react-redux';
import { fetchData } from '@/redux/features/LoadDataSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import CookieConsent from "react-cookie-consent";

const inter = Inter({ subsets: ['latin'] });


export default function Home() {

  const products = useSelector((state: RootState) => state.Data.products);
  
  const dispatch = useDispatch();

  const FetchMyData = fetchData() as any;
  /* When we want to put "fetchData()" in dispatch() - Typescript will have a problem */

  useEffect(()=> {
    if(products.length == 0)
    {
      dispatch(FetchMyData);
    }
    else return;
    
  }, []);
  return (
    <>
     <Head>
        <title>FastFood FastWay!</title>
     </Head>
    <nav> 
      <Navbar/> 
    </nav>
    <main className='container'>
     <div className='HelloPage'>
        <p className='line typing'>Are you hungry?</p>
        <div className='HelloPage__check'>
            <Link href='/menu' className='link'> Yes </Link>
            <Link href='/menu' className='link'> Sure! </Link>      
        </div>
       <div className='HelloPage__aboutUS'> <Link href='/aboutus' className='HelloPage__aboutUS__link'>About us!</Link></div> 
      </div>
     
    </main>
    <footer> 
        <Footer/>
    </footer>
      <CookieConsent
         location="bottom"
         buttonText="Okay!"
         cookieName="testCookie"
         style={{ background: "black" }}
         buttonStyle={{ color: "#4e503b", fontSize: "17px" }}
         expires={150}>
        {describes[0].describe}
    </CookieConsent>
    </>
  )
}
