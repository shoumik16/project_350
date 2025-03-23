import { model,Schema,models } from "mongoose";

const productSchema = new Schema({
    name:{type:String,required:true},
    about:String,
    price:{type: Number,required: true}
})

export const Product= models.Product|| model('Product',productSchema)