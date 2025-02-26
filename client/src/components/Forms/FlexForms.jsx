import React, { useEffect, useState } from "react";
import "./forms.css";
import Resume from "../../assets/Bilas_Resume.pdf";
import Copy from "../../assets/images/copy.svg";
import Download from "../../assets/images/download.svg";
import Check from "../../assets/images/check.svg";
import axios from "axios";

const FlexForms = () => {
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [copy, setCopy] = useState(false);
  const [download, setDownload] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //const url = "https://portfolio-server-aqzj.onrender.com";
  const url = "http://localhost:3000";

  const handleEmailSend = async (e) => {
    e.preventDefault();
    const { name, from, message } = formData;
    try {
      const res = await axios.post(`${url}/api/email/send`, {
        name,
        from,
        message,
      });

      if (res.status === 200) {
        setFormData({
          name: "",
          from: "",
          message: "",
        });
        setError(null);
        setSuccess(true);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const { message } = error.response.data;
        setError(message || "An error occured");
      }
    }
  };

  const handleCopyGmail = async () => {
    try {
      await window.navigator.clipboard.writeText("kikobilas123@gmail.com");
      setCopy(true);
    } catch (error) {
      console.error("Unable to copy to clipboard.", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCopy(false);
      setDownload(false);
      setSuccess(false);
    }, 3000);

    return () => clearInterval(interval);
  }, [copy, download, success]);

  return (
    <section className="contact-container">
      <div className="resume">
        <div className="resume-contents">
          <h1>Get in touch</h1>

          <div className="contact-btns">
            <button className="boton-elegante" onClick={handleCopyGmail}>
              {copy ? <img src={Check} /> : <img src={Copy} />}
              {copy ? `Copied to Clipboard` : `kikobilas123@gmail.com`}
            </button>
            <a href={Resume} download="Bilas_Resume" target="_blank">
              <button
                className="boton-elegante"
                onClick={() => setDownload(true)}
              >
                {download ? <img src={Check} /> : <img src={Download} alt="" />}{" "}
                {download ? "Resume Downloaded" : "Download Resume"}
              </button>
            </a>
          </div>
        </div>
      </div>
      <form onSubmit={handleEmailSend}>
        <div className="pair-elements">
          <div className="form-element">
            <span>Name</span>
            <input
              placeholder="John Doe"
              className="input"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-element">
            <span>Email</span>
            <input
              placeholder="example@gmail.com"
              className="input"
              name="from"
              type="email"
              value={formData.from}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-element">
          <span>Message</span>
          <textarea
            placeholder="Put your message here"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="boton-elegante">
          {success ? "Email Sent" : "Send Email"}
        </button>
      </form>
    </section>
  );
};

export default FlexForms;
