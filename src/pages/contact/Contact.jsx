import React from "react";
import "./contact.css";
import { Nav } from "../../components/nav/Nav";
import { Footer } from "../../components/footer/Footer";
import contactpic from "../../images/pexels-joanne-xavier-7146232.jpg";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState('');
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Emailjs service ID, template ID, and Public Key
    const serviceId = "service_4as138a";
    const templateId = "template_mvllcf5";
    const publicKey = "Rlzkpz7do8IJ7tYBN";

    // Create a new object that contains dynamic template params

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Business Owner",
      message: message,
    };

    //send email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div>
      <Nav />
      <div className="contact-wrapper">
        <div className="contact-section">
          <div className="contact-form">
            <p>Send us a message and we'll get back to you soon.</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <input type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} /> */}
              <textarea
                name="txt-area"
                id="txt-area"
                cols="30"
                rows="10"
                placeholder="type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button>Send</button>
            </form>
          </div>

          {console.log(name)}
          {console.log(email)}
          {/* {console.log(subject)} */}
          {console.log(message)}

          <div className="img-contact">
            <img src={contactpic} alt="contact-picture" />
          </div>
        </div>
        <div className="contact-container">
          <p className="sub-heading">Contact Us</p>
          <p className="tell">
            Tel: 123-456-7890
            <br />
            Fax: 123-098-7654
          </p>
          <p className="address">
            500 Terry Francois Street <br />
            San Francisco, CA 94158
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
