import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xw245rq",
        "template_0zjzxie",
        form.current,
        "user_g0KDYyj2la9KvvFPiEjK7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="">
      <h1 className="p-5 display-5">Contact</h1>
      <div className="d-flex justify-content-center">
        <div className="col-10 form-container">
          <form className="" ref={form} onSubmit={sendEmail}>
            <input
              className="form-control form-control-md"
              type="text"
              name="user_name"
              required
              placeholder="Full Name"
            />
            <input
              className="form-control"
              type="email"
              name="user_email"
              required
              placeholder="Email"
            />
            <textarea
              className="form-control"
              name="message"
              required
              placeholder="Message"
            />
            <button
              type="submit"
              className="form-control btn btn-success"
              value="Send"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
