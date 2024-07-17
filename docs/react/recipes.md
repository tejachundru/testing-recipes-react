### 1. Snapshot testing

- Snapshot testing is a way to test the behavior of a component without having to render it.
- It allows you to compare the output of a component with a previously saved snapshot.
- This can be useful when you want to ensure that your component renders the same way as it did in the past.
- To create a snapshot, you can use the `toMatchSnapshot` method provided by Jest.
- Here's an example of how to use snapshot testing in a React component:

```javascript
import React from "react";
import { render } from "@testing-library/react";

const MyComponent = () => {
  return <div>Hello, world!</div>;
};

describe("MyComponent", () => {
  it("renders correctly", () => {
    const { container } = render(<MyComponent />);
    expect(container).toMatchSnapshot();
  });
});
```

In this example, the `render` function is used to render the `MyComponent` component. The `container` property is then used to access the rendered component. The `toMatchSnapshot` method is used to compare the output of the component with a previously saved snapshot.
