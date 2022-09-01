import React, { useState } from 'react'
import { AiFillTags } from 'react-icons/ai'
function List({ contacts }) {
  const [filterText, setFilterText] = useState('')
  const onChangeInput = (e) => {
    setFilterText(e.target.value)
  }
  const filtred = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase()),
    )
  })
  return (
    <div>
      <h3 className="text-center">Kişilerim</h3>
      <input
        type="text"
        name="filterText"
        className="form-control "
        onChange={onChangeInput}
        value={filterText}
        placeholder="Aramak istediğiniz kelimeyi giriniz..."
      />

      <ul>
        {filtred.map((item, index) => (
          <li key={index} className="mt-2">
            <span className="text-capitalize">
              {item.full_name}
            </span>

            <span>{item.phone_number}</span>
          </li>
        ))}
        <p className="text-center">Toplam Kullanıcı ( {filtred.length} )</p>
      </ul>
    </div>
  )
}

export default List
