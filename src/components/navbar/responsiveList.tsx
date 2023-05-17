import { faCaretDown, faCaretUp, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useEffect } from "react";


interface Rlistprops {
    router:any;
}

interface elementsstatus {
   BtnIcon: IconDefinition;
   listClass: string;
   bgBlur: string;
}
export function ResponsiveList(props: Rlistprops)
{
   /* This function works only  on mobile/tablet device. When you click arrow
   background will be blur and list with links will show up */
   const [dropped, setDropped] = useState<boolean>(false);
   const [elements, setElements ] = useState<elementsstatus>({BtnIcon: faCaretDown, listClass: "navlist__links", bgBlur: "navlist"});
   const triggerBtn = () => {
      setDropped(!dropped);
   }
   useEffect(()=> {
     if(dropped) {
      setElements({BtnIcon: faCaretUp, listClass: "navlist__links", bgBlur: "navlist__active"})
     }
     else {
      setElements({BtnIcon: faCaretDown, listClass: "navlist__linksHidden", bgBlur: "navlist"})
     }
   }, [dropped]);
    return(
    <div className={elements.bgBlur}>
       <button className="navlist__btn" onClick={triggerBtn}><FontAwesomeIcon icon={elements.BtnIcon}/></button>
         <div className={elements.listClass}> 
           <ul>
                <li className="elem2">
                   <Link href="/" className="elem2">Start</Link>
                 </li> 

                 <li className="elem1">
                    <Link href="/menu" className="elem1" >Menu</Link>
                 </li>  

                 <li className="elem2">
                    <Link href="/aboutus" className="elem2">About us!</Link>
                 </li>  

                 <li className="elem1">
                    <Link href="/cart" className="elem1">Cart</Link>
                 </li>  
  
              </ul>
            </div>
       </div>
    )
}