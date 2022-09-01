import React, { useState } from 'react'

const fullValueName = { full_name: '', phone_number: '' }
function FormOne({ setContacts, contacts }) {
  const [form, setForm] = useState(fullValueName)
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (form.full_name === '' || form.phone_number === '') {
      return false
    }
    setContacts([...contacts, form])
    setForm(fullValueName)
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="mt-5 ">
        <div>
          <input
            type="text"
            id=""
            name="full_name"
            value={form.full_name}
            placeholder="Ad Soyad:"
            className="form-control"
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            type="text"
            id=""
            name="phone_number"
            value={form.phone_number}
            placeholder="Telefon:"
            className="form-control my-2"
            onChange={onChangeInput}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary px-5">Ekle</button>
        </div>
      </form>
    </div>
  )
}

export default FormOne
