import { render } from "@testing-library/react";
import Head from "../components/Head";

describe("Heading Component", () => {
   test("Render the component", () => {
      const { container } = render(<Head />);
      expect(container).toBeInTheDocument();
   });

   test("Check textContent from heading title", () => {
      const { container } = render(<Head />);
      const heading = container.querySelector("h1");
      expect(heading).toHaveTextContent("Hello World");
   });
});
