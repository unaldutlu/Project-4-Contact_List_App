import { useState } from "react";
import "./styles.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  return (
    <div id='container' className='rounded-3'>
      <h1 className='text-center fw-bolder text-warning'>Contacts</h1>
      <List contacts={contacts} setContacts={setContacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
