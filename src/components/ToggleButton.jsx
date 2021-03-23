import styled from "styled-components";

export default function ToggleButton({ isShow, onToggle }) {
   return (
      <Button className="toggle-button" onClick={onToggle}>
         {isShow ? "Hide" : "Show"}
      </Button>
   );
}

const Button = styled.button`
   margin-top: 40px;
   padding: 10px;
   font-size: 20px;
   cursor: pointer;
`;
