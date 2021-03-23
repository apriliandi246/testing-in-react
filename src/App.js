import styled from "styled-components";
import Head from "./components/Head";
import ToggleButton from "./components/ToggleButton";
import Text from "./components/Text";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

export default function App() {
   const [isShow, setStatusShow] = useState(true);

   function toggleText() {
      setStatusShow(!isShow);
   }

   return (
      <Container>
         <Head />
         <Button />
         <ToggleButton onToggle={toggleText} isShow={isShow} />
         {isShow === true && <Text />}
         <Counter />
      </Container>
   );
}

const Container = styled.div`
   width: 80%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 50px auto;
`;
