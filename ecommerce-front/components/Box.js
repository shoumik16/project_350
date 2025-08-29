import Center from "./Center"
import styled from "styled-components"
const Pp=styled.div`

background-color:#fff;
padding:20px;
img
{
max-width:100%;
max-height: 150px;
}

`;
export default function Box({_id,name,about,price,images}){
    
    return (
        <Pp>
        <img src={images[0]} alt=""/>
         {name}
        </Pp>
           
        
        
       
    )
}