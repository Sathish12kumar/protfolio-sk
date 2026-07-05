import { useState } from "react";
import "./CSS Styles/contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState();
  const onSubmit = async (event) => {
    const load = toast.loading("Sending message…");
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", import.meta.env.VITE_APP_KEY);
      const response = await fetch(import.meta.env.VITE_APP_FROMAPI, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Submitted");
        event.target.reset();
        toast.update(load, {
          render: "Message sent!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        setResult("Error");
        toast.dismiss(load);
        toast.error("Message not sent!");
      }
      setResult(data.success ? "Success!" : "Error");
      console.log(import.meta.env.VITE_APP_FROMAPI);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="contact" id="Contact">
      <div className="left-con">
        <div className="title">Contact me</div>
        <div className="subTitle">Reach out anytime</div>
        <div className="para">
          Whether you have a project in mind, a question about my work, or just
          want to say hello, feel free to reach out. I’m always open to new
          opportunities and collaborations, and I’ll get back to you as soon as
          possible.
        </div>
        <div className="info">
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text">
              <div className="name">My Email</div>
              <p>sathish120305@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <div className="name">Visit us</div>
              <p>Namakkal , TamilNadu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-con">
        <form onSubmit={onSubmit}>
          <div className="ipt">
            <legend>Full Name</legend>
            <input type="text" placeholder="Full Name" name="name" required />
          </div>
          <div className="ipt">
            <legend>Email address</legend>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="ipt">
            <legend>About your inquiry</legend>
            <textarea
              placeholder="Enter your message"
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
