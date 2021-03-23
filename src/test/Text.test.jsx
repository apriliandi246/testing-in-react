import { render } from "@testing-library/react";
import Text from "../components/Text";

describe("Text Component", () => {
   test("Render the component", () => {
      const { container } = render(<Text />);
      expect(container).toBeInTheDocument();
   });
});
