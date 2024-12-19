import React, { useState } from "react"
import FormDate from "./FormDate"

function CheckOutFormDate({clearCart}) {
  const [dataForm, setDataForm] = useState({
    name: "",
    age: "",
    address: "",
    paymentMethod: "efectivo",
  })

  const resetForm = () => {
    setDataForm({
      name: "",
      age: "",
      address: "",
      paymentMethod: "efectivo",
    });
    clearCart()
  }

  return (
    <FormDate clearCart={resetForm}/>
  )
}

export default CheckOutFormDate