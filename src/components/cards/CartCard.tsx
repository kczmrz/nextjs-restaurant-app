import { CartItem } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { DeleteCartElement, UpdatePrice, CheckCart } from "@/redux/features/cartSlice";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

interface CartCardProps {
    data: CartItem;
}
export default function CartCard(props: CartCardProps)
{
    const [Size, setSize] = useState<string>();
    const dispatch = useDispatch();
    const notify = () => toast.success("Item has been deleted from cart");
    /* Convert number size to text size */
    useEffect(() => {
        const SizeTxt:string[] = ["Small ", "Normal ", "Big "];
        if(!props.data.size) return;
        else {
            setSize(SizeTxt[props.data.size])
        }
     }, [])

   
     /* Delete element from cart by ID - function */
    const DeleteItemFromCart = () => {
        notify();
        dispatch(DeleteCartElement(props.data.id));
        dispatch(UpdatePrice());
        dispatch(CheckCart());
    }

    return(
        <div className="CartCard">

           <div className="CardCard__box">{Size} {props.data.title} &nbsp;
              <span className="CardCard__box__price">  {props.data.price}pln </span> &nbsp; 
           </div>

           <div className="CardCard__box"><button className="CartCard__button" onClick={DeleteItemFromCart}>Delete</button></div>
        </div>
    )
}
