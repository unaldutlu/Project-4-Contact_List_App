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
          placeholder='Filter contact'
          value={filterText}
          onChange={onChangeText}
        />
      </div>
      <ul>
        {filtered.map((contact, e) => (
          <li key={e}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
