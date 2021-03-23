import { useState } from "react";
import styled from "styled-components";

export default function Button() {
   const [status, setStatus] = useState(true);

   function changeStatus() {
      setStatus(!status);
   }

   return (
      <ButtonEl onClick={changeStatus}>{status ? "true" : "false"}</ButtonEl>
   );
}

const ButtonEl = styled.button`
   margin-top: 40px;
   padding: 10px;
   font-size: 20px;
   cursor: pointer;
`;
