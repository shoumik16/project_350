import Layout from "@/components/Layout"
import { useState } from "react"
import axios from "axios"
export default function categories()
{   
    const[name,setName] = useState('')
    async function  f() {
        await axios.post('/api/cat',{name})
    }
    return (
        <Layout>
            <h1>
                Categories
            </h1>
            <form className="flex gap-1" onSubmit={f}>
                <input className="mb-0"  type="text" placeholder={'Category Name'}
                onChange={ev=>setName(ev.target.value)} value={name}/>
                <button type="submit" className="btn">
                    save
                </button>
            </form>
        </Layout>
           
    )
}