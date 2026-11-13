"use client";
import { createContext, useContext, useState } from "react";
type Contact = {
  contactId: string;
  name: string;
  email: string;
  address: string;
  mobileNumber: string;
};

type ContactContextType = {
  contact: Contact | null;
  setContact: (contact: Contact) => void;
};

const ContactContext = createContext<ContactContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [contact, setContact] = useState<Contact | null>(null);

  return (
    <ContactContext.Provider value={{ contact, setContact }}>
      {children}
    </ContactContext.Provider>
  );
}
//custom hook to use the contact context
export function useContactContext(): ContactContextType {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error(" AppProvider is missing");
  }
  return context;
}
