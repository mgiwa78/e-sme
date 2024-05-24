import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="mb-2 fs-40 ">No Store Found</h1>
    </div>
  );
};

export default NotFound;
