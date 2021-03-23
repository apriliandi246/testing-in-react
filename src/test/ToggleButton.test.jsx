import { fireEvent, render } from "@testing-library/react";
import ToggleButton from "../components/ToggleButton";

describe("ToggleButton Component", () => {
   test("Render the component", () => {
      const { container } = render(<ToggleButton />);
      expect(container).toBeInTheDocument();
   });

   test("Text content of the button is equal 'Hide' when first render", () => {
      const { container } = render(<ToggleButton isShow={true} />);
      const btn = container.querySelector("button");
      expect(btn).toHaveTextContent("Hide");
   });

   test("Text content of the button is equal 'Show' isShow props is equal false", () => {
      const { container, rerender } = render(<ToggleButton isShow={true} />);
      rerender(<ToggleButton isShow={false} />);
      expect(container.querySelector("button")).toHaveTextContent("Show");
   });
});
