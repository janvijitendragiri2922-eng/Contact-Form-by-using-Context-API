import ContactForm from "./components/ContactForm";
import ContactDetails from "./components/ContactDetails";

export default function Home() {
  return (
    <div>
      <ContactForm/>
      <hr/>
      <br/>
      <ContactDetails/>
    </div>
  );
}

