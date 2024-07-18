import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormBehavior from "../components/FormBehaviour";

describe("FormBehavior Component", () => {
  test("renders form with inputs and a submit button", () => {
    render(<FormBehavior />);
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
    expect(screen.getByLabelText("Select Country")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("shows error message if form is submitted without filling details", () => {
    render(<FormBehavior />);
    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByText("Please fill all the details")).toBeInTheDocument();
  });

  test("shows error message if form is submitted with an invalid name", () => {
    render(<FormBehavior />);
    fireEvent.change(screen.getByPlaceholderText("Enter name"), {
      target: { value: "John123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter password"), {
      target: { value: "password" },
    });
    fireEvent.change(screen.getByLabelText("Select Country"), {
      target: { value: "USA" },
    });
    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByText("Please enter a valid name")).toBeInTheDocument();
  });

  test("submits the form when all details are valid", () => {
    render(<FormBehavior />);
    fireEvent.change(screen.getByPlaceholderText("Enter name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter password"), {
      target: { value: "password" },
    });
    fireEvent.change(screen.getByLabelText("Select Country"), {
      target: { value: "USA" },
    });
    fireEvent.click(screen.getByText("Submit"));
    expect(
      screen.queryByText("Please fill all the details")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Please enter a valid name")
    ).not.toBeInTheDocument();
    expect(screen.getByText("Form Submitted")).toBeInTheDocument();
  });
});
