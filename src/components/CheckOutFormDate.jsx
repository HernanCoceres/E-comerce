import React, { useState } from "react"
import FormDate from "./FormDate"

function CheckOutFormDate({ clearCart }) {
  const [dataForm, setDataForm] = useState({ name: "", age: "", address: "", paymentMethod: "cash",})

  const resetForm = () => {
    setDataForm({ name: "", age: "", address: "", paymentMethod: "cash",})
    clearCart()
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setDataForm((prevData) => ({...prevData, [name]: value,}))
  }


  return (
    <FormDate
      clearCart={resetForm}
      dataForm={dataForm}
      setDataForm={setDataForm}
      handleChange={handleChange}
    />)
}

export default CheckOutFormDate