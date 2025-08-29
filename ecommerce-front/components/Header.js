import Link from "next/link"
import styled from "styled-components"
import Center from "./Center";
export default function Header()
{
    const Sh=styled.header`
    background-color: #221;
    `;
    const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;
  
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
 const Nl = styled(Link)`
  color:#aaa;
  text-decoration:none;
  
`;
const Ns = styled.nav`
  display: flex;
  gap:15px;
  
`;

    return (
    
            <Sh>
                <Center>
                    <Wrapper>
            <Logo href={'/'}>Ecommerce</Logo>
                   <Ns>
                   <Nl href={'/'}>Home</Nl>
                   <Nl href={'/products'}>Products</Nl>
                   <Nl href={'/categories'}>Categories</Nl>
                    <Nl href={'/account'}>Account</Nl>
                     <Nl href={'/cart(0)'}>Cart</Nl>

                      </Ns>
                      </Wrapper>

                </Center>
                
             </Sh>
        
    )
}