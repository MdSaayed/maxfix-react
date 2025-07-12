import React, { useState } from "react";
import Swal from "sweetalert2";

const BlogCommentForm = () => {
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

    // Simulate form processing (can be replaced with real API call)
    setTimeout(() => {
      Swal.fire({
        title: "Thank You!",
        text: "Your comment has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Clear form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 500);
  };

  return (
    <form className="blog__comment-form" onSubmit={handleSubmit}>
      <h3 className="blog__form-subtitle">Leave A Comment</h3>

      <div className="blog__input-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="blog__input"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="blog__input"
          required
        />
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Comment...."
        className="blog__textarea"
        rows="7"
        required
      ></textarea>

      <div className="blog__btn-wrap">
        <button type="submit" className="blog__submit btn-arrow">
          <span className="blog__submit-text btn-arrow__text">
            Submit Comment
          </span>
        </button>
      </div>
    </form>
  );
};

export default BlogCommentForm;
