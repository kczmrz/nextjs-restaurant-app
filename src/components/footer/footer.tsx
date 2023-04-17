import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
import { contact, Info, socialmedia } from "@/Config";
import Link from "next/link";

/*  when I want to use a faGithub (or whatever icon from free-brands-svg-icons) in "FontAwesomeIcon icon", I have a problem" */
/* therefore I'm using "faIcon as IconProp" in FontAwesomeIcon icon */
/* <FontAwesomeIcon icon={faInstagram as IconProp} />  */
/* https://github.com/FortAwesome/react-fontawesome/issues/366 */


export default function Footer(){
   
    return(
    <div> 
        <div className="footer__hr"/>
        <div className="footer">
           <div className="footer__elements">
              <div className="element"> <a href='https://github.com/kczmrz' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub as IconProp} />  Kczmrz</a> </div>
            <ul>
                <b>Information</b>
                <li><Link href={Info.link1 as string}>Info 1</Link></li>
                <li><Link href={Info.link2 as string}>Info 2</Link></li>
                <li><Link href={Info.link3 as string}>Info 3</Link></li>
            </ul>

            <ul>
                <b>Contact</b>
                <li><FontAwesomeIcon icon={faPhone} /> {contact.PhoneNumber} </li>
                <li><FontAwesomeIcon icon={faAt} /> {contact.Email} </li>
            </ul>

            <ul>
                <b>Follow us!</b>
                <li><Link href={socialmedia.link1 as string}><FontAwesomeIcon icon={faInstagram as IconProp} /> Instagram</Link></li>
                <li><Link href={socialmedia.link2 as string}><FontAwesomeIcon icon={faFacebook as IconProp} /> Facebook</Link></li>
                <li><Link href={socialmedia.link3 as string}><FontAwesomeIcon icon={faTwitter as IconProp} /> Twitter</Link></li>
            </ul>
           </div>
        </div>
    </div>
    )
};