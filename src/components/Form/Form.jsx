import { useState } from "react"
import { Title } from "../Title/Title"

import "./Form.css"
import { Button } from "react-bootstrap"

export function Form (){

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const handleOnSubmit = (evt) => {
    evt.preventDefault()
    console.log(`Datos enviados: ${formData.name}, ${formData.email}`)
  }
  
  const handleOnChange = (evt) => {
    setFormData ({
      ...formData, 
      [evt.target.name]: evt.target.value
    })
  }

  let title = "FORMULARIO DE CONTACTO"
  let text = "Rellene el formulario a continuación para que podeamos ponernos en contacto con usted."

  return (

    <section className="form-container">

      <Title title={title} text={text} />
      
      <form className="form" onSubmit={handleOnSubmit}>
        <input className="input-form" type='text' name='name' placeholder='Ingrese su nombre' onChange={handleOnChange} value={formData.name} />
        <input className="input-form" type='text' name='email' placeholder='Ingrese su email' onChange={handleOnChange} value={formData.email} />

        <Button style={{ background: 'rgb(133, 139, 252)' }} variant="primary">Enviar</Button>
      </form>

    </section>

  )
}
