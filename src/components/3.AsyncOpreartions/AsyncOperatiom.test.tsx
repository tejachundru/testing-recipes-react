import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductsList from "./AsyncOperation";
import { mock } from "node:test";

// Define the shape of our product
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

// Define the shape of our API response
interface ApiResponse {
  products: Product[];
}

// Create a mock for the global fetch function
const mockFetch = jest.fn() as jest.MockedFunction<typeof global.fetch>;
global.fetch = mockFetch;

describe("ProductsList", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("renders loading state initially", () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ products: [] }),
    } as Response);
    render(<ProductsList />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders products list when API call is successful", async () => {
    const mockProducts: ApiResponse = {
      products: [
        { id: 1, title: "Product 1", description: "Description 1", price: 10 },
        { id: 2, title: "Product 2", description: "Description 2", price: 20 },
      ],
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    } as Response);

    render(<ProductsList />);

    await waitFor(() => {
      expect(screen.getByText("Products List")).toBeInTheDocument();
    });

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Price: $10")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
    expect(screen.getByText("Price: $20")).toBeInTheDocument();
  });

  it("renders error message when API call fails", async () => {
    const errorMessage = "Network error";
    mockFetch.mockRejectedValueOnce(new Error(errorMessage));

    render(<ProductsList />);

    await waitFor(() => {
      expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });
  });

  it("renders error message when API returns non-ok response", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Not Found",
    } as Response);

    render(<ProductsList />);

    await waitFor(() => {
      expect(
        screen.getByText("Error: Network response was not ok Not Found")
      ).toBeInTheDocument();
    });
  });

  it("calls fetch with the correct URL", () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ products: [] }),
    } as Response);
    render(<ProductsList />);
    expect(mockFetch).toHaveBeenCalledWith("https://dummyjson.com/products");
  });

  it("renders message when product list is empty", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ products: [] }),
    } as Response);

    render(<ProductsList />);

    await waitFor(() => {
      expect(screen.getByText("No products found")).toBeInTheDocument();
    });
  });
});
