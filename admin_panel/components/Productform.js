import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function Productform({
  _id,
  name:existingName,
  about:existingAbout,
  price:existingPrice

})
{   
    const [name,setName]=useState(existingName || '')
    const [about,setAbout]=useState(existingAbout || '')
    const [price,setPrice]=useState(existingPrice || '')
    const [goproduct,setGoproduct]=useState(false)
    const router=useRouter()
    async function f(ev)
     {     
        ev.preventDefault()
           const productInfo={name,about,price}
           if(_id)
           {
            await axios.put('/api/products',{...productInfo,_id})
           }
           else
           {
            await axios.post('/api/products',productInfo)
            
           }
           setGoproduct(true)
          
     }
     if(goproduct)
     {
     router.push('/products')
     }

    return (
      
        <form onSubmit={f}>
        <label>name</label>
        <input type="text" placeholder="product name" value={name} onChange={ev=>setName(ev.target.value)}/>
        <label>about</label>
        <textarea placeholder="descripion" value={about} onChange={ev=>setAbout(ev.target.value)}/>
        <label> price</label>
        <input type="number" placeholder="price" value={price} onChange={ev=>setPrice(ev.target.value)}/>
        <button className="btn">Save It</button>
        </form>
        
    )
}