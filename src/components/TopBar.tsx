import React from "react";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <div className="container container-xxl">
      <p className="mb-0 py-2 text-white font-weight-600 text-center">
        Free Express Shipping on all US order over $100
      </p>
    </div>
  );
};

export default TopBar;
