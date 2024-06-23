import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-col">
        <h3>
          <span>Contact with me</span>
        </h3>
        <h4>send message</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sunt
          voluptates sapiente ipsa aliquam iure exercitationem earum asperiores
          voluptas assumenda iusto, facere ab fuga perspiciatis praesentium
          ratione perferendis fugit nesciunt!
        </p>
        <ul>
          <li>Conact@naml.dev</li>
          <li>0758861764</li>
          <li>Kandy,Sri lanka</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label>Email</label>
          <input
            type="mail"
            name="mail"
            placeholder="Enter your email"
            required
          />
          <label>Send a message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message here"
            required
          />
          <button type="submit" className="submit-btn">
            submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
