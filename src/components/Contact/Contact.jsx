import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Modal";

export default function Contact() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          handleShow();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact">
      <h1 className="p-5 display-5">Get In Touch</h1>
      <div className="d-flex justify-content-center">
        <div className="col-10 form-container">
          <form ref={form} onSubmit={sendEmail}>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you, I will contact you shortly!</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
