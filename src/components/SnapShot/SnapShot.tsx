import React from "react";

const SnapShot = ({ name }: { name?: string }) => {
  return (
    <div>
      <span>Hello {name ? name : "World"}!</span>
    </div>
  );
};

export default SnapShot;
