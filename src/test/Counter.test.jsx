import { fireEvent, render } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter Component", () => {
   test("Render the component", () => {
      const { container } = render(<Counter />);
      expect(container).toBeInTheDocument();
   });

   test("Count is equal zero when first render", () => {
      const { container } = render(<Counter />);
      const heading = container.querySelector("h1");
      expect(parseInt(heading.textContent)).toBe(0);
   });

   test("Count is equal how many times button is clicked", () => {
      const { container } = render(<Counter />);
      const buttonCount = container.querySelector("button");

      for (let i = 1; i <= 10; i++) {
         fireEvent.click(buttonCount);
      }

      const heading = container.querySelector("h1");
      expect(parseInt(heading.textContent)).toBe(10);
   });
});
