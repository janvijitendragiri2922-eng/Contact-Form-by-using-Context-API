"use client";
import { useContactContext } from "../context/ContactContext";

export default function ContactDetails() {
  const { contact } = useContactContext();
  console.log("Contact details:", contact);

  return (
    <div>
     
      <h2>Contact Details</h2>
      {contact ? (
        <div>
          <p><b>Contact ID:</b> {contact.contactId}</p>
          <p><b>Name:</b> {contact.name}</p>
          <p><b>Email:</b> {contact.email}</p>
          <p><b>Address:</b> {contact.address}</p>
          <p><b>Mobile Number:</b> {contact.mobileNumber}</p>
        </div>
      ) : (
        <center>
          <p>No contact details available. </p>
        </center>
      )}
    </div>
  );
}
