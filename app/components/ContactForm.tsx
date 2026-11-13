"use client";
import { useContactContext } from "../context/ContactContext";
import { useState } from "react";

export default function ContactForm() {
  const { setContact } = useContactContext();

  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contactId, setContactId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContact({
      contactId,
      name,
      email,
      address,
      mobileNumber,
    });
    alert("Form submitted successfully!");
    console.log("Form submitted successfully!");
  };
  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Contact ID"
          value={contactId}
          onChange={(e) => setContactId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
