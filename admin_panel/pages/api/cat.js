import {Cat} from "@/models/Cat"
import { mongooseConnect } from "@/lib/mongoose"
export default async function handle (req,res)
{
const {method}=req
 await mongooseConnect()

 if(method==='GET')
 {
    res.json(await Cat.find().populate('parentcat'))
 }

 if (method === 'POST') {
    const { name, parent } = req.body;

const newCat = { name };

if (parent) {
  newCat.parentcat = parent;
}

const data = await Cat.create(newCat);
res.json(data);

}
if (method === 'PUT') {
   const { name, parent ,_id} = req.body;

const newCat = { name };

if (parent) {
 newCat.parentcat = parent;
}

const data = await Cat.updateOne({_id},newCat);
res.json(data);

}

}