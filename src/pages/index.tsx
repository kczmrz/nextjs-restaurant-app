import { Navbar, Footer } from '@/components';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { imgs } from '@/images';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { contact, describes } from '@/Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch  }  from 'react-redux';
import { fetchData } from '@/redux/features/LoadDataSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';

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
    <div>
       <Head>
        <title>FastFood FastWay!</title>
      </Head>
      <Navbar/> 
        <div className='container' id="index_one">
          <div className='content'>
            <div className='Information'>
              <div className='Information__container one'> <Image src={imgs.burger2} alt="Cooking for you!" /> </div>
              <div className='Information__container two'> 
                Cooking for you is our passion! 
               <div className='two__description'>
                {describes[0].describe}
                </div>
                <div>
                  <FontAwesomeIcon icon={faPhone} /> {contact.PhoneNumber} <br/>
                  or <Link href='/menu' style={{ textDecoration: 'none', color: 'white' }}>order online! </Link>
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
