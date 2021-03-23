import styled from "styled-components";

export default function Text() {
   return (
      <RandomText className="random-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil
         reiciendis deserunt unde voluptates rem quis ullam perspiciatis
         accusamus commodi nulla accusantium quod eveniet, explicabo laboriosam
         laborum facilis veritatis iste.
      </RandomText>
   );
}

const RandomText = styled.p`
   font-size: 20px;
   line-height: 30px;
   font-family: Ubuntu;
   margin-top: 40px;
   background-color: #2e444b;
   padding: 20px;
   color: whitesmoke;
   border-radius: 20px;
`;
