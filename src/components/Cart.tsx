import React from "react";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div className="canvas-sidebar cart-canvas">
      <div className="canvas-overlay"></div>
      <form className="h-100">
        <div className="card border-0 pt-5 pb-7 h-100">
          <div className="px-6 text-right">
            <span className="canvas-close d-inline-block fs-24 mb-1 ml-auto lh-1 text-primary">
              <i className="fal fa-times"></i>
            </span>
          </div>
          <div className="card-header bg-transparent py-0 px-6">
            <h3 className="fs-24 mb-5">Your Cart</h3>
            <p className="fs-15 text-primary">
              <span className="d-inline-block mr-2 fs-14">
                <i className="far fa-check-circle"></i>
              </span>
              Your cart is saved for the next
              <span className="font-weight-500">4m34s</span>
            </p>
          </div>
          <div className="card-body px-6 pt-7 overflow-y-auto">
            <div className="mb-6 d-flex">
              <a href="#" className="d-block mr-4">
                <i className="fal fa-times"></i>
              </a>
              <div className="media">
                <div className="w-70px mr-4">
                  <img src="/images/cart-01.jpg" alt="Partridge Bar Stool" />
                </div>
                <div className="media-body">
                  <p className="text-muted fs-12 mb-0 text-uppercase letter-spacing-05 lh-1 mb-1">
                    chairs
                  </p>
                  <a href="#" className="font-weight-bold mb-3 d-block">
                    Partridge Bar Stool
                  </a>
                  <div className="d-flex align-items-center">
                    <div className="input-group position-relative">
                      <a
                        href="#"
                        className="down position-absolute pos-fixed-left-center pl-2"
                      >
                        <i className="far fa-minus"></i>
                      </a>
                      <input
                        type="number"
                        className="w-100px px-6 text-center"
                        value="1"
                      />
                      <a
                        href="#"
                        className="up position-absolute pos-fixed-right-center pr-2"
                      >
                        <i className="far fa-plus"></i>
                      </a>
                    </div>
                    <p className="mb-0 ml-12 text-primary">$1250.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6 d-flex">
              <a href="#" className="d-block mr-4">
                <i className="fal fa-times"></i>
              </a>
              <div className="media">
                <div className="w-70px mr-4">
                  <img src="/images/cart-02.jpg" alt="Partridge Bar Stool" />
                </div>
                <div className="media-body">
                  <p className="text-muted fs-12 mb-0 text-uppercase letter-spacing-05 lh-1 mb-1">
                    Table
                  </p>
                  <a href="#" className="font-weight-bold mb-3 d-block">
                    Partridge Round Bar
                  </a>
                  <div className="d-flex align-items-center">
                    <div className="input-group position-relative">
                      <a
                        href="#"
                        className="down position-absolute pos-fixed-left-center pl-2"
                      >
                        <i className="far fa-minus"></i>
                      </a>
                      <input
                        type="number"
                        className="w-100px px-6 text-center number"
                        value="1"
                      />
                      <a
                        href="#"
                        className="up position-absolute pos-fixed-right-center pr-2"
                      >
                        <i className="far fa-plus"></i>
                      </a>
                    </div>
                    <p className="mb-0 ml-12 text-primary">$1250.00</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="fs-15 text-primary pt-1">
              <span className="d-inline-block mr-2 fs-14">
                <i className="fas fa-info-circle"></i>
              </span>
              Special instruction for seller
            </p>
          </div>
          <div className="card-footer mt-auto border-0 bg-transparent px-6 pb-0 pt-5">
            <div className="d-flex align-items-center mb-4">
              <span className="font-weight-bold text-primary">Subtotal</span>
              <span className="d-block ml-auto text-primary">$2000.00</span>
            </div>
            <input
              type="text"
              className="form-control w-100 text-primary mb-4"
              placeholder="Enter coupon code here"
            />
            <input
              type="submit"
              className="btn btn-primary btn-block mb-2"
              value="Check Out"
            />
            <a
              href="#"
              className="d-block fs-14 text-uppercase letter-spacing-05 text-center font-weight-bold"
            >
              View Cart
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cart;
