## Rendering UI

Getter functions

- screen.getByText
- screen.getByLabelText
- screen.getByPlaceholderText
- screen.getByRole
- screen.getByTestId
- screen.getByAltText
- screen.getByTitle
  and more...

**_which query should we use?_**
your test should resemble how the user will use/interact with the component as much as possible

---

### Example

```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { RenderingComponents } from "./index";

describe("RenderingComponents", () => {
  test("renders the component", () => {
    render(
      <RenderingComponents
        title="Hello, this is a title"
        description="This is a description"
      />
    );
    const heading = screen.getByText("Hello, World!");
    const input = screen.getByPlaceholderText("Type something");
    const button = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
```
