import { render, screen } from "@testing-library/react";
import Discover from "./pages/Discover";

test("renders learn react link", () => {
  render(<Discover />);
  const HelloWorldElem = screen.getByText(/hello world/i);
  expect(HelloWorldElem).toBeInTheDocument();
});
