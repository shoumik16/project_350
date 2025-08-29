/*import Link from "next/link";
import {Sb} from "@/components/Button"
import styled from "styled-components";
 

const styledLink=styled(Link)`
     ${Sb}
       `



export default function ButtonLink(props)
{
  return(
        <styledLink {...props} />
    )
}*/
import Link from "next/link";
import { Bs } from "@/components/Button";
import styled from "styled-components";

const StyledLink = styled(Link)`
  ${Bs}
`;

export default function ButtonLink(props) {
  return <StyledLink {...props} />;
}
