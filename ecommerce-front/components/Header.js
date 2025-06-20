import Link from "next/link"
import styled from "styled-components"
import Center from "./Center";
export default function Header()
{
    const Sh=styled.header`
    background-color: #222;
    `;

    return (
    
            <Sh>
                <Center>
<Link href={'/'}>Ecommerce</Link>
           
            <nav>
                 <Link href={'/'}>Ecommerce</Link>
                  <Link href={'/products'}>Ecommerce</Link>
                   <Link href={'/categories'}>Ecommerce</Link>
                    <Link href={'/account'}>Ecommerce</Link>
                     <Link href={'/cart(0)'}>Ecommerce</Link>
            </nav>
                </Center>
                
             </Sh>
        
    )
}