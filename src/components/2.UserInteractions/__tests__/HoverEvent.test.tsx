import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import HoverEvent from "../components/HoverEvent";

test("Tooltip visible", () => {
  render(<HoverEvent />);
  userEvent.hover(screen.getByText(/hover over me/i));
  expect(screen.getByText(/tooltip text/i)).toBeInTheDocument();
});
