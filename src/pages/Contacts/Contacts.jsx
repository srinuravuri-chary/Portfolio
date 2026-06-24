import React, { useState } from "react";
import "./Contacts.css";

const Contacts = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      "fd69c0d7-123c-4f42-a1cb-d58e730bc9d3"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="contact" id="contact">
      {/* Background glow circle */}
      <div className="glow-blob primary blob-contact-1"></div>

      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-grid">
          {/* Left Side: Contact Information Cards */}
          <div className="contact-info-card">
            <h3>Let's Connect</h3>
            <p className="contact-text">
              Interested in working together or discussing new opportunities? I'm always open to meaningful conversations, exciting projects, and collaborations. Reach out anytime via email or phone. 
            </p>

            <div className="contact-info-list">
              <div className="info-box">
                <span className="label">Email</span>
                <a href="mailto:srinuravuriiiii@gmail.com">
                  srinuravuriiiii@gmail.com
                </a>
              </div>

              <div className="info-box">
                <span className="label">Phone</span>
                <a href="tel:+918328619809">+91 832861****</a>
              </div>

              <div className="info-box">
                <span className="label">Location</span>
                <p>Tekulapalli road, khammam</p>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="contact-form-card">
            <h3>Send a Message</h3>
            
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>

              {result && (
                <p className={`result-msg ${result.includes("success") ? "success" : result === "Sending..." ? "sending" : "error"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;