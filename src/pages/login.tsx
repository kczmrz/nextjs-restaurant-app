import { Navbar, Footer } from '@/components';
import Head from 'next/head';
export default function Login()
{
    return(
   <div>
    <Head>
        <title>Login</title>
      </Head>
     <Navbar/>
     <div className="container">
        <div className="content">
         <div className="login"> 
          <form className="form" action="/api/form" method="post">
             <label className="form__text" htmlFor="first">Email</label>
             <input className="form__input" type="text" id="first" name="first" required/>
             <label className="form__text" htmlFor="last">Password</label>
             <input className="form__input" type="password" id="last" name="last" required/>
             <span className='form__register'> 
              <a href="/" className='form__register__link'>Forgot password</a>
              <a href="/" className='form__register__link'><b> or register?</b></a>
             </span>
            <button className="button_1" type="submit"><span>Login </span></button>
          </form>
        </div> 
      </div>
     </div>
     <Footer/>
 </div>)
}