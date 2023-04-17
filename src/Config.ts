/*Gh Pages edition */


/* You can complete the data! */
const contact = {PhoneNumber: 123456789, Email: "Email@email.com"}
const Info = {link1: '#', link2:'#', link3: '#'};
const socialmedia = {link1: "https://instagram.com/", link2: "https://facebook.com/", link3: "https://twitter.com/"};

const PostOrderCheck = true;  /* Post your order ON/OFF */
const GetOrderCheck = false;  /* Json loading from 'localhost:3000/api/order ON/OFF */

const test = '';

const describes = [
    /* For index page */
    {
        describe:
        "This app has been created using Next JS with Typescript, Sass, MongoDB, and Redux-Toolkit. It simulates a fake fast-food restaurant and includes 4 pages: index, order, work, and cart. You can add an item from the menu to the cart and remove it later. All items are loaded from MongoDB. Have fun! Author: Kczmrz"
    },
  /* For work page */
    {
        describe:
        "This app has been created using Next JS with Typescript, Sass, MongoDB, and Redux-Toolkit. It simulates a fake fast-food restaurant and includes 4 pages: index, order, work, and cart. You can add an item from the menu to the cart and remove it later. All items are loaded from MongoDB. Have fun! Author: Kczmrz"
    },
];

const URL = "http://192.168.8.100:3000";

export {contact, Info, socialmedia, describes, URL, PostOrderCheck, GetOrderCheck};