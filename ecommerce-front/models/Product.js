
import { model,Schema,models } from "mongoose";
const productSchema = new Schema({
    name:{type:String,required:true},
    about:String,
    price:{type: Number,required: true},
    images:[{type:String}],
    category:{type:Schema.Types.ObjectId,ref:'Cat'},
    productProperties:{type:Object}
})

export const Product= models.Product|| model('Product',productSchema)