"use client";
import { selectStoreDetails } from "@/redux/selectors/store";
import { post } from "@/utils/api";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

type Props = {};

const Footer = (props: Props) => {
  const params = useParams();
  const { storeSlug }: any = params;
  const storeDetails = useSelector(selectStoreDetails);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [respon, setRespon] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    setIsLoading(true);
    try {
      const res = await post(`email/${storeSlug}`, { email, contact, name });
      console.log(res);

      if (res._id) {
        setRespon("You've been added to the mailing list");
        setEmail("");
        setName("");
        setContact("");
      }
      if (res.message) {
        setRespon("Email Already exists");
      }
    } catch (error) {
      console.error("Failed to subscribe:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <footer className="pt-13 pb-4 footer bg-color-2">
      <div className="container container-xxl">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3 mb-6 mb-lg-0">
            <h3 className="fs-14 mb-3 text-uppercase letter-spacing-05">
              menu
            </h3>
            <ul className="list-unstyled mb-0">
              <li className="py-0">
                <Link
                  href={`/store/${storeSlug}`}
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Home
                </Link>
              </li>
              <li className="py-0">
                <Link
                  href={`/store/${storeSlug}/products`}
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Products
                </Link>
              </li>
              <li className="py-0">
                <Link
                  href={`/store/${storeSlug}/about`}
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  About
                </Link>
              </li>
              <li className="py-0">
                <Link
                  href={`/store/${storeSlug}/contact`}
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {(storeDetails?.facebookUrl ||
            storeDetails?.instagramUrl ||
            storeDetails?.linkedinUrl ||
            storeDetails?.twitterUrl) && (
            <div className="col-md-6 col-lg-3 mb-6 mb-lg-0">
              <h3 className="fs-14 mb-3 text-uppercase letter-spacing-05">
                follow us
              </h3>
              <ul className="list-unstyled mb-0">
                {storeDetails?.facebookUrl && (
                  <li className="py-0">
                    <Link
                      target="_blank"
                      href={storeDetails?.facebookUrl}
                      className="text-gray hover-primary lh-2 font-weight-500"
                    >
                      Facebook
                    </Link>
                  </li>
                )}

                {storeDetails?.instagramUrl && (
                  <li className="py-0">
                    <Link
                      target="_blank"
                      href={storeDetails?.instagramUrl}
                      className="text-gray hover-primary lh-2 font-weight-500"
                    >
                      Instagram
                    </Link>
                  </li>
                )}
                {storeDetails?.twitterUrl && (
                  <li className="py-0">
                    <Link
                      target="_blank"
                      href={storeDetails?.twitterUrl}
                      className="text-gray hover-primary lh-2 font-weight-500"
                    >
                      Twitter
                    </Link>
                  </li>
                )}
                {storeDetails?.linkedinUrl && (
                  <li className="py-0">
                    <Link
                      target="_blank"
                      href={storeDetails?.linkedinUrl}
                      className="text-gray hover-primary lh-2 font-weight-500"
                    >
                      Linkedin
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
          <div className="col-md-6 col-lg-3 mb-6 mb-lg-0">
            <h3 className="fs-14 mb-3 text-uppercase letter-spacing-05">
              newsletter
            </h3>
            <form>
              <span className=" mb-3 text-capitalize fw-bold">{respon}</span>
              <div className="input-group position-relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control border-top-0 border-left-0 border-right-0 px-0 border-2x bg-transparent"
                  placeholder="Full Name"
                />
              </div>
              <div className="input-group position-relative">
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="form-control border-top-0 border-left-0 border-right-0 px-0 border-2x bg-transparent"
                  placeholder="Contact"
                />
              </div>
              <div className="input-group position-relative">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control border-top-0 border-left-0 border-right-0 px-0 border-2x bg-transparent"
                  placeholder="Email Address"
                />
                <div className="input-group-append fs-14 position-absolute pos-fixed-right-center z-index-2">
                  <button
                    className="bg-transparent border-0 outline-none"
                    type="button"
                    onClick={() => handleSubscribe()}
                  >
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-2 mt-md-7 row align-items-center">
          <p className="col-md-auto mb-4 mb-md-0 text-gray lh-1 fs-14 font-weight-500">
            © 2024 {storeDetails?.siteName}. All rights reserved.
          </p>
          <ul className="list-inline mb-0 col-md-6 ml-auto text-md-right">
            <li className="list-inline-item">
              <Link href="#">
                <img src="/images/card_01.png" alt="Amex" />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#">
                <img src="/images/card_02.png" alt="G-Pay" />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#">
                <img src="/images/card_03.png" alt="Master Card" />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#">
                <img src="/images/card_04.png" alt="Paypal" />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#">
                <img src="/images/card_05.png" alt="D-Pay" />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#">
                <img src="/images/card_06.png" alt="V-Card" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
