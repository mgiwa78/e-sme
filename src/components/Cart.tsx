import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import {
  clearCart,
  removeItem,
  incrementItem,
  decrementItem,
} from "@/redux/slice/cartSlice";
import { formatToNaira } from "@/utils/format";

type Props = {};

const Cart = (props: Props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const products = useSelector((state: RootState) => state.product.items);
  const isLoading =
    useSelector((state: RootState) => state.product.status) === "loading";

  const spinnerStyle = {
    display: "inline-block",
    width: "80px",
    height: "80px",
    border: "8px solid rgba(0, 0, 0, 0.1)",
    borderTop: "8px solid #000",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div style={spinnerStyle}></div>
      </div>
    );
  }

  return (
    <div className="canvas-sidebar cart-canvas">
      <div className="canvas-overlay"></div>
      <form className="h-100">
        <div className="card border-0 pt-5 pb-7 h-100">
          <div className="px-6 text-right">
            <span
              className="canvas-close d-inline-block fs-24 mb-1 ml-auto lh-1 text-primary"
              onClick={() => dispatch(clearCart())}
            >
              <i className="fal fa-times"></i>
            </span>
          </div>
          <div className="card-header bg-transparent py-0 px-6">
            <h3 className="fs-24 mb-5">Your Cart</h3>
          </div>
          <div className="card-body px-6 pt-7 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => {
                const product = products.find((prod) => prod._id === item._id);
                return (
                  <div className="mb-6 d-flex" key={item._id}>
                    <a
                      href="#"
                      className="d-block mr-4"
                      onClick={() => product && dispatch(removeItem(product))}
                    >
                      <i className="fal fa-times"></i>
                    </a>
                    <div className="media">
                      <div className="w-70px mr-4">
                        <img src={product?.image} alt={product?.name} />
                      </div>
                      <div className="media-body">
                        <p className="text-muted fs-12 mb-0 text-uppercase letter-spacing-05 lh-1 mb-1">
                          {product?.category.name}
                        </p>
                        <a href="#" className="font-weight-bold mb-3 d-block">
                          {product?.name}
                        </a>
                        <div className="d-flex align-items-center">
                          <div className="input-group position-relative">
                            <a
                              href="#"
                              className="down position-absolute pos-fixed-left-center pl-2"
                              onClick={() => dispatch(decrementItem(item._id))}
                            >
                              <i className="far fa-minus"></i>
                            </a>
                            <input
                              type="number"
                              className="w-100px px-6 text-center"
                              value={item.quantity}
                              readOnly
                            />
                            <a
                              href="#"
                              className="up position-absolute pos-fixed-right-center pr-2"
                              onClick={() => dispatch(incrementItem(item._id))}
                            >
                              <i className="far fa-plus"></i>
                            </a>
                          </div>
                          <p className="mb-0 ml-12 text-primary">
                            {formatToNaira(product?.price || 0)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="card-footer mt-auto border-0 bg-transparent px-6 pb-0 pt-5">
            <div className="d-flex align-items-center mb-4">
              <span className="font-weight-bold text-primary">Subtotal</span>
              <span className="d-block ml-auto text-primary">
                {formatToNaira(
                  cartItems.reduce(
                    (total, item) =>
                      total +
                      (products?.find((prod) => prod?._id === item?._id)?.price
                        ? Number(
                            products?.find((prod) => prod?._id === item?._id)
                              ?.price
                          )
                        : 0) *
                        item.quantity,
                    0
                  )
                )}
              </span>
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

// Adding keyframes for the spin animation
const styleSheet = document.styleSheets[0];
const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
styleSheet?.insertRule(keyframes, styleSheet.cssRules.length);
