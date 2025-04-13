import { model,Schema,models } from "mongoose";

const catSchema = new Schema({
    name:{type:String,required:true},
    
})

export const Cat= models?.Cat|| model('Cat',catSchema)