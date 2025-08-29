// Button.js
import styled, { css } from "styled-components";

export const Bs = css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration:none;

  ${props => props.size === 'l' && css`
    font-size: 1.2rem;
    padding: 10px 20px;
    svg {
      height: 16px;
      margin-right: 5px;
    }
  `}
  ${props => props.white && css`
    background-color: #fff;
    color: #000;
  `}

  ${props => props.primary && css`
    background-color: #5542f6;
    color: #fff;
  `}
`;

export const Sb = styled.button`
  ${Bs}
`;

export default function Button({ children, ...rest }) {
  return <Sb {...rest}>{children}</Sb>;
}
