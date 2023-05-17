import Link from 'next/link';
import { useRouter } from 'next/router';
import { ShoppingBasket } from './BasketIcon';
import { ResponsiveList } from './responsiveList';

function Navbar()
{
    const router = useRouter();
    return(
      <div className='navbar'> 
         <div className="nav">
        
          <ul className="nav__leftside">
                <li className={router.pathname == "/" ? "active" : ""}>
                   <Link href="/">Start</Link>
                 </li> 
                <li className={router.pathname == "/menu" ? "active" : ""}>
                    <Link href="/menu">Menu</Link>
                 </li>  

                 <li className={router.pathname == "/aboutus" ? "active" : ""}>
                    <Link href="/aboutus">About us!</Link>
                 </li>  
            </ul>
            <div className="nav__Logo">
             FastFoodFastWay
            </div>
            <div className="nav__rightside">
               <ShoppingBasket/>
            </div>
         </div>
        <ResponsiveList router={router}/>
      </div>
    )
}

export default Navbar;