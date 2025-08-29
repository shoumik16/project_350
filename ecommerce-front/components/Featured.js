import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
export default function Featured({featuredProduct}){
    const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:4rem;
 
`;
const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;
const Wr = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img
  {
  max-width:100%;
  }
`;
const Br = styled.div`
  display: flex;
  gap: 5px;

`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
    return (

        <Bg>
        <Center>
        <Wr>
        <Column>
        <div>
      <Title>
            {featuredProduct.name}
                </Title>
                <Desc>
            rtr uytfytfytd tydytdytd ytdjytdjyt hgfytdjdjtrd gftrtrdjtrd fdtdjtrdjtrd grdjtdjdjtd htjytdjdyt yftff tftftf tftftft yfftf tftftf tftftf tftftf ccttctc gvtc ygyggyg ygygygyg gvygyy  vyyy ygygygyg
            </Desc>
            <Br>
            
            <ButtonLink white size="l" href={'/products/'+featuredProduct._id} >Read more</ButtonLink>
            <Button primary size="l">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
    </svg>add to cart</Button>
            </Br>
            
         </div>
                    
            </Column>
            <div>

            </div>
                </Wr>
            </Center>
           


        </Bg>
    )
}