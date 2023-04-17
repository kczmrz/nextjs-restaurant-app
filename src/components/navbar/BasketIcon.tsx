import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

export function ShoppingBasket()
{
    const CartState = useSelector((state:RootState) => state.Cart.CartIsEmpty);
    const basketTrigger:boolean = CartState;
    return(
        <div>
            {
            basketTrigger
            ?<span ><Link href="/cart" className="nav__basket" ><FontAwesomeIcon icon={faShoppingBasket}/> </Link></span>
            :<span ><Link href="/cart" className="nav__basket_active" ><FontAwesomeIcon icon={faShoppingBasket}/></Link></span>
           }
           
        </div>
    )
}