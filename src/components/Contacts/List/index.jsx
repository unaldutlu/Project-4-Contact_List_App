import { useState } from "react";

function List({ contacts, setContacts }) {
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

  const deleteHandler = (index) => {
    contacts.splice(index, 1);
    setContacts([...contacts]);
  };

  const resetHandler = () => {
    setContacts(contacts.filter((e) => e.id !== contacts.id));
  };

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
                <div className='col-5 text-start px-2 text-break lower'>
                  <span className="text-danger">{e + 1}.</span> {contact.fullname}
                </div>
                <div className='col-6 text-end px-2 text-break'>
                  {contact.phone_number}
                </div>
                <div className='col-1 text-start px-2'>
                  <button
                    className='btndelete rounded-3'
                    onClick={() => deleteHandler(e)}
                  >
                    <i className='bi bi-dash-circle'></i>
                  </button>
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className='row'>
          <div className='col-8'>
            <p className='text-warning mt-2'>
              Total contacts ({filtered.length})
            </p>
          </div>
          <div className='col-4 mt-1 text-end'>
            <button
              className='btn btn-danger rounded-pill fw-bold'
              onClick={resetHandler}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
