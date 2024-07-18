## Calls to external APIs/functions

Testing the behavior of a component that calls external APIs/functions is important to ensure that the component behaves as expected and that the expected output is rendered or updated.

To test the behavior of a component that calls external APIs/functions, you can use the `fetch` API or a mocking library like `nock` to simulate the behavior of the external APIs/functions.

Here's an example of testing a component that calls an external API using the `fetch` API:

```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { CallsToExternalAPIsFunctions } from "./index";

describe("CallsToExternalAPIsFunctions", () => {
  test("renders the component", async () => {
    render(<CallsToExternalAPIsFunctions />);
    const heading = screen.getByText("Hello, World!");
    const button = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    // Simulate a click on the button
    await screen.findByRole("button").click();

    // Check if the heading text has been updated
    expect(heading).toHaveTextContent("Hello, John!");
  });
});
```

In this example, we are testing a component that calls an external API using the `fetch` API. We simulate a click on the button and then check if the heading text has been updated.

## Reference

- [Testing Library](https://testing-library.com/docs/react-testing-library/api#fetch)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/api#fetch)
