import { useState } from "react";
import React from "react";
export default function ContactUs({ setUser, user }) {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!name || !familyName || !phoneNumber || !email || !message) return;
    setUser({
      name: name,
      familyName: familyName,
      phoneNumber: phoneNumber,
      email: email,
      message: message,
    });
    clearForm();
  };

  const clearForm = () => {
    document.getElementById("form").reset();
    setName("");
    setFamilyName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit} id="form">
          <h3>Contact Us</h3>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="familyName">Family Name</label>
            <br />
            <input
              type="text"
              value={familyName}
              id="familyName"
              onChange={(e) => setFamilyName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <br />
            <input
              type="number"
              value={phoneNumber}
              id="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <br />
            <input
              type="text"
              value={message}
              id="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" id="login-btn">
            Login
          </button>
        </form>
      </section>
      <section>
        {handleSubmit ? (
          <h4>
            Dear user with name and FamilyName : {user.name} {user.familyName}{" "}
            Your message was successfully registered.
          </h4>
        ) : null}
      </section>
    </>
  );
}
