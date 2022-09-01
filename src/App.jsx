import { useEffect, useState } from "react";
import "./App.css";
import FormOne from "./componets/FormOne";
import List from "./componets/List";

function App() {
  const [contacts, setContacts] = useState([
    {
      full_name: "Samet",
      phone_number: "12345678910"
    },
    {
      full_name: "Ali",
      phone_number: "12345678910"
    },
    {
      full_name: "Veli",
      phone_number: "12345678910"
    }
  ]);

  useEffect(
    () => {
      console.log(contacts);
    },
    [contacts]
  );

  return (
    <div className="container shadow mt-5 p-3 col-md-12 col-lg-6 mx-auto  ">
      <List contacts={contacts} />
      <FormOne setContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default App;
