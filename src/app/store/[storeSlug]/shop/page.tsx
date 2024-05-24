import React from "react";

type Props = {};

const Shop = (props: Props) => {
  return (
    <div className="pt-17 pb-4 bg-accent page-title-05">
      <div className="container">
        <h1 className="fs-40 mb-16 mt-5 text-center">Shop</h1>
        <div className="d-flex justify-content-center justify-content-lg-between flex-wrap flex-lg-nowrap position-relative">
          <a
            href="#"
            className="media px-7 mb-5 align-items-center border-right"
          >
            <div className="w-40px mr-3">
              <img src="/images/chair.png" alt="Chair" />
            </div>
            <div className="media-body">
              <h5 className="fs-16 mb-1">Chairs</h5>
              <p className="mb-0 text-gray-01 fs-14">20 Items</p>
            </div>
          </a>
          <div className="separator"></div>
          <a href="#" className="media px-7 mb-5 align-items-center">
            <div className="w-40px mr-3">
              <img src="/images/desk.png" alt="Tables" />
            </div>
            <div className="media-body">
              <h5 className="fs-16 mb-1">Tables</h5>
              <p className="mb-0 text-gray-01 fs-14">20 Items</p>
            </div>
          </a>
          <div className="separator"></div>
          <a href="#" className="media px-7 mb-5 align-items-center">
            <div className="w-40px mr-3">
              <img src="/images/fish_bowl.png" alt="Accessories" />
            </div>
            <div className="media-body">
              <h5 className="fs-16 mb-1">Accessories</h5>
              <p className="mb-0 text-gray-01 fs-14">20 Items</p>
            </div>
          </a>
          <div className="separator"></div>
          <a href="#" className="media px-7 mb-5 align-items-center">
            <div className="w-40px mr-3">
              <img src="/images/sofa.png" alt="Sofa" />
            </div>
            <div className="media-body">
              <h5 className="fs-16 mb-1">Sofa</h5>
              <p className="mb-0 text-gray-01 fs-14">20 Items</p>
            </div>
          </a>
          <div className="separator"></div>
          <a href="#" className="media px-7 mb-5 align-items-center">
            <div className="w-40px mr-3">
              <img src="/images/plant.png" alt="Plants" />
            </div>
            <div className="media-body">
              <h5 className="fs-16 mb-1">Plants</h5>
              <p className="mb-0 text-gray-01 fs-14">20 Items</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shop;
