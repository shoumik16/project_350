import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function NewProduct()
{   
    const [name,setName]=useState('')
    const [about,setAbout]=useState('')
    const  [price,setPrice]=useState('')
    const [goproduct,setGoproduct]=useState(false)
    const router=useRouter()
    async function f(ev)
     {     
        ev.preventDefault()
           const productInfo={name,about,price}
           await axios.post('/api/products',productInfo)
           setGoproduct(true)
     }
if(goproduct)
{
     router.push('/products')
}

    return (
        <Layout>
            <form onSubmit={f}>
            <h1 >New Product</h1>
            <label>name</label>
            <input type="text" placeholder="product name" value={name} onChange={ev=>setName(ev.target.value)}/>
            <label>about</label>
            <textarea placeholder="descripion" value={about} onChange={ev=>setAbout(ev.target.value)}/>
            <label> price</label>
            <input type="number" placeholder="price" value={price} onChange={ev=>setPrice(ev.target.value)}/>
            <button className="btn">Save It</button>
            </form>
        </Layout>
    )
}