"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useFormik } from "formik";
import * as Yup from "yup";
import { selectStoreDetails } from "@/redux/selectors/store";
import { post } from "@/utils/api";

type Props = {};

const Contact: React.FC<Props> = () => {
  const params = useParams();
  const { storeSlug }: any = params;
  const storeDetails = useSelector(selectStoreDetails);

  const [respon, setRespon] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleVerificationSuccess = (token: string) => {
    setCaptchaToken(token);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      content: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      name: Yup.string().required("Required"),
      content: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const res = await post(`contact/${storeSlug}`, {
          ...values,
          captcha: captchaToken,
        });
        console.log(res);

        if (res._id) {
          setRespon("Your message has been sent");
          formik.resetForm();
        }
        if (res.message) {
          setRespon("Error sending message");
        }
      } catch (error) {
        console.error("Failed to send message:", error);
        setRespon("Error sending message");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      <section className="py-3 bg-color-3">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb py-0">
              <li className="breadcrumb-item">
                <a href="index-2.html">Home</a>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <div className="pt-17 pb-4 bg-accent page-title-05">
        <div className="container">
          <h1 className="fs-40 mb-16 mt-5 text-center">Contact</h1>
        </div>
      </div>

      <div className="pb-14 pt-14">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-8 mb-8 mb-md-0">
              <h2 className="fs-24 mb-2">We would love to hear from you.</h2>
              <p className="mb-7">
                If you’ve got great products you're making or looking to work
                with us then drop us a line.
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div style={{ color: "#000" }} className="mb-3">
                  {respon}
                </div>
                <div className="row mb-6">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      {...formik.getFieldProps("name")}
                      className="form-control"
                      placeholder="Your Name*"
                      required
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-danger">{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      {...formik.getFieldProps("email")}
                      className="form-control"
                      placeholder="Your Email*"
                      required
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="form-group mb-4">
                  <textarea
                    {...formik.getFieldProps("content")}
                    className="form-control"
                    rows={6}
                    placeholder="Comment"
                  ></textarea>
                  {formik.touched.content && formik.errors.content ? (
                    <div className="text-danger">{formik.errors.content}</div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <HCaptcha
                    sitekey="your-hcaptcha-site-key" // replace with your hCaptcha site key
                    onVerify={handleVerificationSuccess}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary text-uppercase letter-spacing-05"
                  disabled={isLoading || !captchaToken}
                >
                  {isLoading ? "Submitting..." : "Submit Now"}
                </button>
              </form>
            </div>
            <div className="col-md-4 pl-xl-13 pl-md-6">
              <p className="font-weight-bold text-primary mb-3">Address</p>
              <address className="mb-6">{storeDetails?.companyAddress}</address>
              <p className="font-weight-bold text-primary mb-2">Information</p>
              <p className="mb-0"> {storeDetails?.contactPhone}</p>
              <p className="mb-7"> {storeDetails?.contactEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
