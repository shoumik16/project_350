import Layout from "@/components/Layout"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

export default function categories()
{   
    const[name,setName] = useState('')
    const[cat,setCat] =useState([])
    const[parent,setParent]=useState('')
    const[edited,setEdited]=useState('')
    useEffect(()=>{
        f1()
     },[])
    function edit(x)
    {
        setEdited(x)
        setParent(x.parentcat?._id)
        setName(x.name)
    }

    function f1()
    {
        axios.get('/api/cat').then(res =>{
            console.log(res.data)
            setCat(res.data)
    })
    }
    async function deletecat(x)
    {
        const{_id}=x
        await axios.delete('/api/cat?_id='+_id)
        f1()
    }
    async function  f(ev) {
        ev.preventDefault()
        const data={name,parent}
        if(edited)
        {   
            data._id=edited._id
            const res=await axios.put('/api/cat',data)
            console.log(res)
            f1()
            setEdited('')
            setParent('')
            setName('')

        }
        else
        {
        const res=await axios.post('/api/cat',{name,parent})
        console.log(res)
        setParent('')
            setName('')
        f1()
        }
    }
    return (
        <Layout>
            <h1>
                Categories
            </h1>
            <label>{edited? `Edit Category ${edited.name}` :`New Category`}</label>
            <form className="flex gap-1" onSubmit={f}>
                <input className="mb-0"  type="text" placeholder={'Category Name'}
                onChange={ev=>setName(ev.target.value)} value={name} />


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
                    <td>Parent Category</td>
                    <td>Option</td>
                </tr>
              </thead>
              <tbody>
                {cat.length >0 && cat.map(x =>(
                        <tr>
                            <td>{x.name}</td>
                           <td>{x?.parentcat?.name}</td>
                           <td>
                            <button className="btn" onClick={()=>edit(x)}>
                                Edit
                            </button>
                            <button className="btn" onClick={()=>deletecat(x)}>
                                Delete
                            </button>
                           </td>
                        </tr>
                    ))}
              </tbody>
            </table>
        </Layout>
           
    )
}