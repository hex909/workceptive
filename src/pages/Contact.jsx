import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useValues } from "../Context";
import { useEffect } from "react";

function Contact() {
  const { contactData, setLoading, loading } = useValues();

  const initialValues = {
    f_name: "",
    l_name: "",
    company_name: "",
    type_issue: "data1",
    email: "",
    mobile: "",
    message: "",
  };

  const validation = Yup.object().shape({
    f_name: Yup.string().required("Required"),
    l_name: Yup.string().required("Required"),
    company_name: Yup.string(),
    type_issue: Yup.string().required("Required"),
    mobile: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    message: Yup.string()
      .min(10, "Too Short")
      .max(100, "Too Long")
      .required("Required"),
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    !loading &&
    contactData.success && (
      <>
        <section className="contact ">
          <section className="details">
            <h2 className="title text-animation">CONTACT US</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3500.7661091409964!2d76.31695579869339!3d9.97740007016809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9eb96e08464d59d!2sWorkceptive%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1659327714132!5m2!1sen!2sin"
              width="600"
              height="450"
              className="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="com_details">
              <address className="company-address text-animation">
                {contactData.data.address}
              </address>
              <p className="company-phone text-animation">
                {" "}
                {contactData.data.phone}
              </p>
            </div>
          </section>

          <section className="form">
            <Formik
              initialValues={initialValues}
              validationSchema={validation}
              validateOnMount
              onSubmit={(values, props) => {
                console.log(values);
                setTimeout(() => {
                  props.setSubmitting(false);
                }, 1000);
              }}
            >
              {(formik) => (
                <Form className="form-ele">
                  <div className="field__container">
                    <div
                      className={`control ${
                        formik.errors.f_name && formik.touched.f_name
                          ? "error-shake"
                          : ""
                      }`}
                    >
                      <div className="field">
                        <Field
                          type="text"
                          name="f_name"
                          className="input"
                          id="f_name"
                          placeholder="inputag"
                        />
                        <label htmlFor="f_name">First Name</label>
                      </div>
                      <ErrorMessage
                        name="f_name"
                        component="span"
                        className="err-message"
                      />
                    </div>
                    <div
                      className={`control ${
                        formik.errors.l_name && formik.touched.l_name
                          ? "error-shake"
                          : ""
                      }`}
                    >
                      <div className="field">
                        <Field
                          type="text"
                          name="l_name"
                          className="input"
                          id="l_name"
                          placeholder="inputag"
                        />
                        <label htmlFor="l_name">Last Name</label>
                      </div>
                      <ErrorMessage
                        name="l_name"
                        component="span"
                        className="err-message"
                      />
                    </div>
                  </div>
                  <div className="field__container">
                    <div
                      className={`control ${
                        formik.errors.company_name &&
                        formik.touched.company_name
                          ? "error-shake"
                          : ""
                      }`}
                    >
                      <div className="field">
                        <Field
                          type="text"
                          name="company_name"
                          className="input"
                          id="company_name"
                          placeholder="inputag"
                        />
                        <label htmlFor="company_name">
                          Company Name (Optional)
                        </label>
                      </div>
                      <ErrorMessage
                        name="company_name"
                        component="span"
                        className="err-message"
                      />
                    </div>

                    <div
                      className={`control ${
                        formik.errors.type_issue && formik.touched.type_issue
                          ? "error-shake"
                          : ""
                      }`}
                    >
                      <div className="field">
                        <Field
                          as="select"
                          name="type_issue"
                          id="type_issue"
                          className="input"
                        >
                          <option value="data1">data1</option>
                          <option value="data2">data2</option>
                          <option value="data3">data3</option>
                          <option value="data4">data4</option>
                        </Field>
                        <label htmlFor="type_issue">Type Of Issue</label>
                      </div>
                      <ErrorMessage
                        name="type_issue"
                        component="span"
                        className="err-message"
                      />
                    </div>
                  </div>

                  <div
                    className={`control ${
                      formik.errors.email && formik.touched.email
                        ? "error-shake"
                        : ""
                    }`}
                  >
                    <div className="field is-75">
                      <Field
                        type="email"
                        name="email"
                        className="input"
                        id="email"
                        placeholder="inputag"
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="err-message"
                    />
                  </div>

                  <div
                    className={`control ${
                      formik.errors.mobile && formik.touched.mobile
                        ? "error-shake"
                        : ""
                    }`}
                  >
                    <div className="field is-75">
                      <Field
                        type="text"
                        name="mobile"
                        className="input"
                        id="mobile"
                        placeholder="inputag"
                      />
                      <label htmlFor="mobile">Mobile</label>
                    </div>
                    <ErrorMessage
                      name="mobile"
                      component="span"
                      className="err-message"
                    />
                  </div>

                  <div
                    className={`control ${
                      formik.errors.message && formik.touched.message
                        ? "error-shake"
                        : ""
                    }`}
                  >
                    <div className="field is-textarea">
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        placeholder="Message"
                      ></Field>
                      <label htmlFor="message">Message</label>
                    </div>
                    <ErrorMessage
                      name="message"
                      component="span"
                      className="err-message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </section>
        </section>
      </>
    )
  );
}

export default Contact;
