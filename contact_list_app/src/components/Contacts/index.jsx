import { useState, useEffect } from "react";
import './styles.css'
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Unal", phone_number: 12345 },
    { fullname: "Mehmet", phone_number: 98765 },
  ]);

  // useEffect(()=>{
  //   console.log(contacts);
  // },[contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
