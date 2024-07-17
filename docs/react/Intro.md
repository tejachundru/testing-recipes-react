Working with jest

    npm install --save-dev jest
    npm install --save-dev @testing-library/jest-dom
    npm install --save-dev @testing-library/react

Working with react testing library

    npm install --save-dev @testing-library/react
    npm install --save-dev @testing-library/user-event

Once the dependencies are installed, you can start writing tests for your React components.

## Jest

Jest is a JavaScript testing framework that was developed by Facebook. It is widely used for testing React components and other JavaScript code.

Jest provides a simple and intuitive API for writing tests. It allows you to write tests for your React components in a way that is similar to how you write tests for other JavaScript code.

### Important Syntax and Concepts

- Test Suites: A test suite is a collection of tests that are grouped together. It is used to organize your tests and make them easier to manage.

- Test Cases: A test case is a single test that verifies a specific behavior of your code. It is used to test a specific functionality or feature of your code.

- Test Expectations: A test expectation is an assertion that is used to verify the behavior of your code. It is used to check if a certain condition is true or false.

- Test Runner: A test runner is a tool that is used to run your tests. It is responsible for executing the tests and reporting the results.

### Writing Tests

To write tests for your React components, you can use the `test` , `it` and `describe` functions provided by Jest.

describe - Used to group related tests together.
it - Used to define a test case.
test - Used to define a test case.

Here's an example of a test case with addition of two numbers:

```javascript
const add = (a, b) => a + b;

// describe - Used to group related tests together.
describe("Addition", () => {
  // it - Used to define a test case. Specify the test case name and the expected behavior of the code.
  it("adds two positive numbers", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it("adds two negative numbers", () => {
    const result = add(-2, -3);
    expect(result).toBe(-5);
  });

  it("adds two zero numbers", () => {
    const result = add(0, 0);
    expect(result).toBe(0);
  });
});
```

In this example, the `test` function is used to define a test case. The `add` function is used to add two numbers. The `expect` function is used to specify the expected behavior of the code. In this case, the expected behavior is that the result of adding two numbers should be 5.

### Running Tests with Jest

To run the tests, you can use the following command:

```
npm test
```

This command will run the tests and display the results in the console.

### Debugging Tests

If you encounter any issues with your tests, you can use the `jest --watch` command to run the tests in watch mode. This will allow you to see the results of the tests as you make changes to your code.

Here's an example of how to run the tests in watch mode:

```
jest --watch
```

This command will run the tests in watch mode and display the results in the console.

## React Testing Library

React Testing Library is a library that provides a simple and complete API for testing React components. It encourages good testing practices and makes it easier to write tests for React components.

### Important Concepts

- Rendering: Rendering is the process of creating a visual representation of a component in the DOM.
- Testing Library: Testing Library is a library that provides a set of utilities for testing React components.
- User Events: User events are actions that a user can perform on a component, such as clicking a button or typing in a text field.

Recipes With React Testing Library

- [Recipes](react/recipes.md)
