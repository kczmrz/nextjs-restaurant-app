import mongoose from "mongoose";

interface IPrice {
    small: number;
    normal: number;
    big: number;
  }

export interface IProducts {
    title: string;
    price: [{
        small: number;
        normal: number;
        big: number;
    }];
    description: string;
    img: number;
}

const productSchema = new mongoose.Schema<IProducts>({
    title: {type: String, required: true, maxlength: 70},
    price: [{
        small: {type: Number, required: true},
        normal: {type: Number, required: true},
        big: {type: Number, required: true },
       
    }],
    description: {type: String, required: true, maxlength: 450},
    img: {type: Number, required: true},
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);




/* POSTMAN JSON EXAMPLE */

/* 
{
    "title": "string",
    "price": {
        "small": 12,
        "normal": 12,
        "big": "12,
    },
    "description": "string",
    "img": "string"
}
*/