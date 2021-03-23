import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
   test("Render the all of the components", () => {
      const { container } = render(<App />);
      expect(container).toBeInTheDocument();
   });

   test("Text component exist when first render", () => {
      const { container } = render(<App />);
      const text = container.querySelector(".random-text");
      expect(text).toBeInTheDocument();
   });

   test("Hide the text when button event trigger", () => {
      const { container } = render(<App />);
      const button = container.querySelector(".toggle-button");

      fireEvent.click(button);

      const text = container.querySelector(".random-text");
      expect(text).not.toBeInTheDocument();
   });

   test("Text context of the button is equal 'Hide' when first render", () => {
      const { container } = render(<App />);
      const button = container.querySelector(".toggle-button");
      expect(button).toHaveTextContent("Hide");
   });

   test("When button is clicked text content is equal 'Show' and when button is clicked again text content become 'Hide'", () => {
      const { container } = render(<App />);

      fireEvent.click(container.querySelector(".toggle-button"));
      expect(container.querySelector(".toggle-button")).toHaveTextContent(
         "Show"
      );

      fireEvent.click(container.querySelector(".toggle-button"));
      expect(container.querySelector(".toggle-button")).toHaveTextContent(
         "Hide"
      );
   });
});
