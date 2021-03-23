import { fireEvent, render } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
   test("Render the component", () => {
      const { container } = render(<Button />);
      expect(container).toBeInTheDocument();
   });

   test("Text content of the button become false when button is clicked and vice versa", () => {
      const { container } = render(<Button />);
      expect(container.querySelector("button")).toHaveTextContent("true");
      fireEvent.click(container.querySelector("button"));
      expect(container.querySelector("button")).toHaveTextContent("false");
   });
});
