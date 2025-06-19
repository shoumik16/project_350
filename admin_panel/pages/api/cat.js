import {Cat} from "@/models/Cat"
import { mongooseConnect } from "@/lib/mongoose"
import { isAdminRequest } from "./auth/[...nextauth]"
export default async function handle (req,res)
{
const {method}=req
 await mongooseConnect()
 await isAdminRequest(req,res);

 if(method==='GET')
 {
    res.json(await Cat.find().populate('parentcat'))
 }

 if (method === 'POST') {
    const { name, parent,features } = req.body;

const newCat = { name };

if (parent) {
  newCat.parentcat = parent;
}
newCat.feat=features
const data = await Cat.create(newCat);
res.json(data);

}
if (method === 'PUT') {
   const { name, parent ,features,_id} = req.body;

const newCat = { name };

if (parent) {
 newCat.parentcat = parent;
 newCat.feat=features
}

const data = await Cat.updateOne({_id},newCat);
res.json(data);

}
if(method==='DELETE')
{
   const {_id}=req.query
   await Cat.deleteOne({_id})
   res.json('ok')
}

}