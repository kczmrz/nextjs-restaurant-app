import mongoose from "mongoose";

interface OrderInterface {
    status: number;
    price: number;
    clientInfo: {
        adress: string;
        phonenumber: number;
        email: string;
        name: string;
    };
    payment: string;
}

const OrderSchema = new mongoose.Schema<OrderInterface>({
    status: {type: Number, required: true, maxlength: 70, default: 0},
    price: {type: Number, required: true},
    clientInfo: {type: [], required: true },
    payment: {type: String, required: true}
   
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);