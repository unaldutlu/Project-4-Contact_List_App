import { useState, useEffect } from "react";

const initialFormValue = { fullname: "", phone_number: "" };

function Form({ addContacts, contacts }) {
  const [form, setForm] = useState(initialFormValue);

  useEffect(() => {
    setForm(initialFormValue);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContacts([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          className='form-control'
          autoComplete='off'
          name='fullname'
          placeholder='Full Name'
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          className='mt-1 form-control'
          autoComplete='off'
          type={"number"}
          name='phone_number'
          placeholder='Phone Number'
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div className='button mt-2'>
        <button className='btn btn btn-warning'>Add</button>
      </div>
    </form>
  );
}

export default Form;
