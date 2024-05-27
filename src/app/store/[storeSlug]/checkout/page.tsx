"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  clearCart,
  removeItem,
  incrementItem,
  decrementItem,
} from "@/redux/slice/cartSlice";
import { formatToNaira } from "@/utils/format";
import { PaystackButton } from "react-paystack";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const products = useSelector((state: RootState) => state.product.items);
  const isLoading =
    useSelector((state: RootState) => state.product.status) === "loading";

  const publicKey = "your-paystack-public-key"; // Replace with your Paystack public key

  const amount = cartItems.reduce((total, item) => {
    const product = products.find((prod) => prod._id === item._id);
    console.log(product, item);
    return total + (product ? product.price * item.quantity * 100 : 0); // Convert to kobo
  }, 0);

  const [email, setEmail] = useState(""); // Customer email
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: `${firstName} ${lastName}`,
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: phone,
        },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (reference: any) => {
      console.log("Payment successful:", reference);
    },
    onClose: () => {
      console.log("Payment closed");
    },
  };

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
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div style={spinnerStyle}></div>
      </div>
    );
  }

  return (
    <main id="content">
      <section className="py-3 bg-color-3">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb py-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#"> Pages </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Checkout
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="pb-11 pb-lg-15 pt-10">
        <div className="container">
          <h2 className="fs-sm-40 mb-9 text-center">Check Out</h2>
          <p className="mb-6">
            Have a coupon?
            <a
              href="#"
              className="d-inline-block fs-15 border-bottom lh-12 border-primary enter-coupon"
            >
              Click here to enter your code
            </a>
          </p>
          <div className="card bg-color-3 mxw-510 border-0 rounded-0 box-coupon mb-8">
            <div className="card-body pt-6 px-5 pb-7">
              <p className="card-text text-primary mb-5">
                If you have a coupon code, please apply it below.
              </p>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email*"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      apply coupon
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <form>
            <div className="row">
              <div className="col-lg-6 mb-9 mb-lg-0">
                <h3 className="fs-24 mb-7">Billing details</h3>
                <div className="form-group mb-5">
                  <label
                    htmlFor="first-name"
                    className="mb-2 text-primary font-weight-500"
                  >
                    First name
                    <abbr
                      className="text-danger text-decoration-none"
                      title="required"
                    >
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="form-control"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-5">
                  <label
                    htmlFor="last-name"
                    className="mb-2 text-primary font-weight-500"
                  >
                    Last name
                    <abbr
                      className="text-danger text-decoration-none"
                      title="required"
                    >
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="form-control"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-5">
                  <label
                    htmlFor="company-name"
                    className="mb-2 text-primary font-weight-500"
                  >
                    Company name(optional)
                  </label>
                  <input
                    type="text"
                    id="company-name"
                    className="form-control"
                    name="company"
                  />
                </div>
                <div className="form-group mb-5">
                  <label
                    htmlFor="country"
                    className="mb-2 text-primary font-weight-500"
                  >
                    Country/Region
                    <abbr
                      className="text-danger text-decoration-none"
                      title="required"
                    >
                      *
                    </abbr>
                  </label>
                  <div className="arrows">
                    <select
                      id="country"
                      className="form-control"
                      required
                      name="country"
                    >
                      <option>United Kingdom (UK)</option>
                      <option>United Kingdom (UK)</option>
                    </select>
                  </div>
                </div>
                <div className="form-group mb-5">
                  <label
                    htmlFor="address"
                    className="mb-2 text-primary font-weight-500"
                  >
                    Street address
                    <abbr
                      className="text-danger text-decoration-none"
                      title="required"
                    >
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="form-control mb-5"
                    name="billing_address_1"
                    required
                    placeholder="House number and street name"
                  />
                  <input
                    type="text"
                    className="form-control"
                    name="billing_address_2"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                  />
                </div>
                <div className="form-group mb-5">
                  <label
                    htmlFor="city"
                    className="mb-2 text-primary font-weight-500"
                  >
                    City / Town
                    <abbr
                      className="text-danger text-decoration-none"
                      title="required"
                    >
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="form-control"
                    required
                    name="city"
                  />
                </div>
                <div className="form-group mb-5">
                  <label
                    htmlFor="postCode"
                    className="mb-2 text-primary font-weight-500"
                  >
                    Post code
                    <abbr
                      className="text-danger text-decoration-none"
                      title="required"
                    >
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    id="postCode"
                    className="form-control"
                    name="post_code"
                    required
                  />
                </div>
                <div className="form-group mb-5">
                  <label
                    htmlFor="email"
                    className="mb-2 text-primary font-weight-500"
                  >
                    Email
                    <abbr
                      className="text-danger text-decoration-none"
                      title="required"
                    >
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-9">
                  <label
                    htmlFor="phone"
                    className="mb-2 text-primary font-weight-500"
                  >
                    Phone
                    <abbr
                      className="text-danger text-decoration-none"
                      title="required"
                    >
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <h3 className="fs-24 mb-7">Additional information</h3>
                <div className="form-group mb-5">
                  <label
                    htmlFor="note"
                    className="mb-2 text-primary font-weight-500"
                  >
                    Order notes(optional)
                  </label>
                  <textarea
                    id="note"
                    className="form-control"
                    name="notes"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6 pl-lg-13">
                <h3 className="fs-24 mb-7">Your order</h3>
                <div className="card border-0 rounded-0 bg-color-3">
                  <div className="card-body px-6 py-7">
                    <div className="d-flex pb-3">
                      <div className="text-primary font-weight-bold">
                        Product
                      </div>
                      <div className="text-primary font-weight-bold ml-auto">
                        Total
                      </div>
                    </div>
                    {cartItems.map((item, index) => {
                      const product = products.find(
                        (prod) => prod._id === item._id
                      );
                      return (
                        <div
                          className="pb-3 mb-3 border-bottom d-flex"
                          key={index}
                        >
                          <div className="text-primary">
                            {product?.name} × {item.quantity}
                          </div>
                          <div className="text-primary ml-auto">
                            {formatToNaira(product?.price || 0 * item.quantity)}
                          </div>
                        </div>
                      );
                    })}
                    <div className="pb-3 mb-3 border-bottom d-flex">
                      <div className="text-primary">Subtotal</div>
                      <div className="text-primary ml-auto">
                        {formatToNaira(
                          cartItems.reduce(
                            (total, item) =>
                              total +
                              (products.find((prod) => prod._id === item._id)
                                ?.price || 0) *
                                item.quantity,
                            0
                          )
                        )}
                      </div>
                    </div>
                    <div className="pb-8 mb-3 border-bottom d-flex">
                      <div className="text-primary">Total</div>
                      <div className="text-primary font-weight-bolder ml-auto">
                        {formatToNaira(
                          cartItems.reduce(
                            (total, item) =>
                              total +
                              (products.find((prod) => prod._id === item._id)
                                ?.price || 0) *
                                item.quantity,
                            0
                          )
                        )}
                      </div>
                    </div>
                    <div className="form-check pl-0 border-bottom pb-3 mb-3">
                      <div className="custom-control custom-radio mb-5">
                        <input
                          className="custom-control-input"
                          type="radio"
                          name="payment-method"
                          id="paystack"
                          value="option1"
                          checked
                        />
                        <label
                          className="custom-control-label text-primary ml-2"
                          htmlFor="paystack"
                        >
                          Paystack
                        </label>
                      </div>
                    </div>
                    <p className="mb-8">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our
                      <a href="#">privacy policy</a>.
                    </p>
                    <PaystackButton
                      {...componentProps}
                      className="btn btn-outline-primary btn-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
