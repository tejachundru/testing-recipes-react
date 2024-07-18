import React from "react";

export const RenderingComponents = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) => {
  return (
    <div>
      <p data-testid="test-id-1">Hello, World!</p>
      <h1>{title || "Hello, this is a title"}</h1>
      <p>{description || "This is a description"}</p>
      {children}
      <input type="text" placeholder="Type something" />
      <button>Click me</button>
    </div>
  );
};
