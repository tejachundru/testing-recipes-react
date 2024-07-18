## What to test ?

- Call Methods/Functions ?
- Check State Changes ?

  We should not reading the implementation of a component to test it. Instead, we encourage you to write tests that check the behavior of the component and its interactions with other components.

### Contract ?

Component contract is the agreement between the component and its consumers. - What is the component supposed to do?

if it fulfills the contract, then it is a good component.

So other components can rely on the contract of the component and produce the agreed output if it's given the right input.

### Testing a Contract

Inputs:

- Props
- User interaction Events

Outputs:

- Rendered UI
- Calls to external APIs/functions

==============================================================================================================================================================================================================================================================================================================================================================================================================

## Rendered UI

- Check for expected elements

  - Check for expected elements in the rendered UI(DOM)

  [Rendering UI](react/rendering.md)

## User Interactions

- Simulate user events
  - to check if the component behaves as expected when the user interacts with it

[User Interactions](react/user-interactions.md)

reference: [testing-library/user-event](https://testing-library.com/docs/user-event/intro/)

## Calls to external APIs/functions

- Check for expected calls to external APIs/functions
  - to check if the component calls the expected external APIs/functions and render or update the expected output

[Calls to external APIs/functions](react/calls-to-external-apis-functions.md)
