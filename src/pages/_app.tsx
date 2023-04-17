import '@/styles/globals.scss'
import type { AppProps } from 'next/app';
import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';
import { ToastContainer } from 'react-toastify';
import { RootState } from '@/redux/store/store';
import { useSelector } from 'react-redux';
import  {Loading}   from '@/components/';
import 'react-toastify/dist/ReactToastify.css';



export default function App({ Component, pageProps }: AppProps) {

return (
       <>
       <Provider store={store}> 
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi"></meta>
          <Loading/>
         <Component {...pageProps} />
         
         <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
             />
       </Provider>
       </>
  )
}

