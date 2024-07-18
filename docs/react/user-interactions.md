## User Interactions

Testing user interactions is a crucial part of testing. It ensures that the component behaves as expected when the user interacts with it.

There are different ways to test user interactions, such as:

- Simulating user events
- Testing the component's behavior

**_simulating user events_**

Simulating user events involves sending input to the component, such as clicking a button or typing in a text field. This allows you to test how the component responds to different user actions.

**_testing the component's behavior_**

Testing the component's behavior involves checking if the component behaves as expected when the user interacts with it. This can be done by checking if the component renders correctly, if the component responds correctly to user actions, and if the component displays the expected output.

---

### Example

```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { HoverEvent } from "./index";

describe("HoverEvent", () => {
  test("renders the component", () => {
    render(<HoverEvent />);
    const tooltip = screen.getByText(/hover over me/i);
    const tooltipText = screen.getByText(/tooltip text/i);
    expect(tooltip).toBeInTheDocument();
    expect(tooltipText).toBeInTheDocument();
  });
});
```

---

### Example

```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { HoverEvent } from "./index";

describe("HoverEvent", () => {
  test("renders the component", () => {
    render(<HoverEvent />);
    const tooltip = screen.getByText(/hover over me/i);
    const tooltipText = screen.getByText(/tooltip text/i);
    expect(tooltip).toBeInTheDocument();
    expect(tooltipText).toBeInTheDocument();
  });
});
```

### what did we achieve?

- we have a test that renders the component
- we have a test that checks if the tooltip is visible
  In general, we have a test that checks if the component is rendered correctly
  with expected values
