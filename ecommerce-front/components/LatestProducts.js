import Center from "./Center"
import Box from "./Box";
import styled from "styled-components"
const Pg=styled.div`
display: grid;
grid-template-columns: 1fr  1fr  1fr;
gap: 20px;
padding-top: 20px;
`;
export default function LatestProducts({newProducts}){
    
    return (
        <Center>
        <Pg>
    {newProducts?.length>0 && newProducts.map(x=>(
            
                 
       <Box {...x}/>
                    
               

            
        ))
        }
        </Pg>
        </Center>
           
        
        
       
    )
}