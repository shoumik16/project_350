import mongoose,{ model,Schema,models } from "mongoose";

const catSchema = new Schema({
    name:{type:String,required:true},
    parentcat:{type:mongoose.Types.ObjectId,ref:'Cat',default: null},
    feat:[{type:Object}]
    
})

export const Cat= models?.Cat|| model('Cat',catSchema)