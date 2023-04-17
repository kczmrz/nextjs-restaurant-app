import mongoose from "mongoose";


export interface IExtras {
    title: string;
    price: number;
    description: string;
    img: number;
}

const extrasSchema = new mongoose.Schema<IExtras>({
    title: {type: String, required: true, maxlength: 70},
    price: {type: Number, required: true,},
    description: {type: String, required: true, maxlength: 450},
    img: {type: Number, required: true},
});

export default mongoose.models.Extras || mongoose.model("Extras", extrasSchema);




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