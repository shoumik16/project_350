import styled from "styled-components"
import Button from "./Button";
import Carticon from "./icons/Carticon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./Cart";
const Pid=styled.div`
margin-top:10px;

`;

const Pp=styled(Link)`

background-color:#fff;
padding:20px;
height:150px;
display:flex;
border-radius:10px;
justify-content:center;
img
{
max-width:100%;
max-height:150px;
}
`;
const Prr=styled.div`



`;
const Txt=styled(Link)`
margin:0;
font-weight:normal;
font-size: .9 rem;
text-decoration:none;
`;
const Dol=styled.div`
font-weight:Bold;
font-size: 1.9 rem;
`
const PPr=styled.div`
display:flex;
justify-content:space-between;
margin-top:5px;
`;

export default function Box({_id,name,about,price,images}){
    const uri='/product'+_id;
    const {addtocart}=useContext(CartContext)
    return (
        <Prr>
            <Pp href={uri}>
        <img src={images[0]} alt=""/>
        
        </Pp>
        <Pid>
         <Txt href={uri}>
            {name}
        </Txt>
        <PPr>
            <Dol>{price}$</Dol>
            
                 <Button primary outline onClick={()=>addtocart(_id)}>
            <Carticon  width={45} height={20} />Add to Cart
         </Button>  
            
        </PPr>   
        </Pid>          
        </Prr>
       
           
        
        
       
    )
}