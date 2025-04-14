import Layout from "@/components/Layout"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

export default function categories()
{   
    const[name,setName] = useState('')
    const[cat,setCat] =useState([])
    const[parent,setParent]=useState('')
    useEffect(()=>{
        f1()
     },[])

    function f1()
    {
        axios.get('/api/cat').then(res =>{
            setCat(res.data)
    })
    }
    async function  f(ev) {
        ev.preventDefault()
        const res=await axios.post('/api/cat',{name,parent})
        console.log(res)
        f1()
    }
    return (
        <Layout>
            <h1>
                Categories
            </h1>
            <form className="flex gap-1" onSubmit={f}>
                <input className="mb-0"  type="text" placeholder={'Category Name'}
                onChange={ev=>setName(ev.target.value)} value={name}/>


                <select className="mb-0"   onChange={ev=>setParent(ev.target.value)} value={parent}>
                  
                   
                    <option value="">No Parent Category</option>
                {cat.length >0 && cat.map(x =>(
                        <option value={x._id}>
                            {x.name}
                        </option>
                    ))} 
                </select>



                <button type="submit" className="btn">
                    save
                </button>
            </form>
            <table className="basic mt-4">
              <thead>
                <tr>
                    <td>Category</td>
                </tr>
              </thead>
              <tbody>
                {cat.length >0 && cat.map(x =>(
                        <tr>
                            <td>{x.name}</td>
                        </tr>
                    ))}
              </tbody>
            </table>
        </Layout>
           
    )
}