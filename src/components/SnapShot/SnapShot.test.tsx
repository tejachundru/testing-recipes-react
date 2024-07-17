import { render } from "@testing-library/react";
import React from "react";
import SnapShot from "./SnapShot";

describe("SnapShot", () => {
  it("renders correctly without no props", () => {
    const { container } = render(<SnapShot />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with props", () => {
    const { container } = render(<SnapShot name="John" />);
    expect(container).toMatchSnapshot();
  });
});
