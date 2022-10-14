import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const onChangeText = (e) => {
    setFilterText(e.target.value);
  };

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <div>
        <input
          className='form-control'
          autoComplete='off'
          placeholder='Filter contact'
          value={filterText}
          onChange={onChangeText}
        />
      </div>
      <div className='lists mt-2 bg-warning p-2 rounded-2'>
        <ul className='fst-italic pb-0'>
          {filtered.map((contact, e) => (
            <li className=' container list fw-bold' key={e}>
              <div className='row'>
                <div className='col-6 text-start px-2 text-break'>
                  {contact.fullname}
                </div>
                <div className='col-6 text-end px-2 text-break'>
                  {contact.phone_number}
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
      <p className='text-warning mt-2'>Total contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
