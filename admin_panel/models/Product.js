import categories from "@/pages/categories";
import { model,Schema,models } from "mongoose";
import mongoose from "mongoose";
const productSchema = new Schema({
    name:{type:String,required:true},
    about:String,
    price:{type: Number,required: true},
    images:[{type:String}],
    category:{type:mongoose.Types.ObjectId,ref:'Cat'},
    productProperties:{type:Object}
})

export const Product= models.Product|| model('Product',productSchema)