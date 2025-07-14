import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Add validation or send the data to a server here

    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. We’ll get back to you shortly.",
      icon: "success",
      confirmButtonColor: "#000",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form className="footer__form" onSubmit={handleSubmit}>
      <span className="footer__form-subtitle">maxfix</span>
      <h4 className="footer__form-title title">Have a project in mind?</h4>
      <input
        type="text"
        name="name"
        className="footer__input"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        className="footer__input"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        className="footer__textarea"
        placeholder="Write Your Message"
        rows="6"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button
        type="submit"
        className="footer__submit btn btn-arrow btn-arrow__black"
      >
        <span className="footer__submit-text btn-arrow__text">
          Submit Message
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
