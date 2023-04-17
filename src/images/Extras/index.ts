import dynamic from "next/dynamic";

export const ExtrasImages = [
    {img: require('../Extras/extras_1.png') },
    {img: require('../Extras/extras_2.png') }
]


export const customLoader = () => {
    return 'https://usagif.com/wp-content/uploads/loading-5.gif.webp'
  }
  