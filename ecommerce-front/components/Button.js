import styled ,{css}from "styled-components";

export default function Button({children,...rest}) {
    const StyledButton =styled.button`
    border:0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  ${props=> props.size ==='l' && css`

     font-size: 1.2rem;
     padding :10px 20px;
     svg{
     height:16px;
     margin-right:5px;
     }
    `

  }
  ${props=> props.primary && css`

    background-color: #5542f6;
    color:#fff;
    `

  }

    `;
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}