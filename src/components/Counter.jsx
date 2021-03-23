import { useState } from "react";
import styled from "styled-components";

export default function Counter() {
   const [count, setCount] = useState(0);

   return (
      <CounterComponent>
         <HeadingOne>{count}</HeadingOne>
         <Button onClick={() => setCount(count + 1)}>Count</Button>
      </CounterComponent>
   );
}

const CounterComponent = styled.div`
   margin-top: 50px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const HeadingOne = styled.h1`
   font-size: 30px;
   font-family: Ubuntu;
   font-weight: bold;
`;

const Button = styled.button`
   margin-top: 20px;
   padding: 10px;
   font-size: 20px;
   cursor: pointer;
`;
