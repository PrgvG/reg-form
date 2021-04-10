import "./App.css"
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateStore } from "./redux/reducers/data"

import { Container, TextField } from "@material-ui/core"

import Header from "./components/Header"
import ButtonBlock from "./components/ButtonBlock"
import LastScreen from "./components/LastScreen"

function App() {
  const [currentStep, setStep] = useState(0)
  const dispatch = useDispatch()
  const data = useSelector(s => s.data)

  const threeLatinCharacters = { pattern: "[A-Za-z]{3,}" }
  const sixCharacters = { pattern: "^.{6,}$" }
  const passwordValidation = { pattern: data.password }
  const dataLabelFix = { InputLabelProps: { shrink: true } }

  const userInfo = [
    { name: "firstName", label: "Enter name", autoComplete: "given-name", value: data.firstName, type: "text", validation: threeLatinCharacters },
    { name: "middleName", label: "Enter middle name", autoComplete: "additional-name", value: data.middleName, type: "text", validation: threeLatinCharacters },
    { name: "lastName", label: "Enter last name", autoComplete: "family-name", value: data.lastName, type: "text", validation: threeLatinCharacters },
    { name: "birthDate", label: "Birthday", autoComplete: "bday", value: data.birthDate, type: "date", props: dataLabelFix },
  ]
  const email = [{ name: "email", label: "Enter email", autoComplete: "email", value: data.email, type: "email" }]
  const password = [
    { name: "password", label: "Enter password", value: data.password, type: "password", validation: sixCharacters },
    { name: "repeatPassword", label: "Repeat password", value: data.repeatPassword, type: "password", validation: passwordValidation },
  ]

  const stepz = [
    { title: "User info", array: userInfo, hint: "Only Latin letters and at least three" },
    { title: "Email", array: email, hint: "Сlassic email address" },
    { title: "Password", array: password, hint: "Minimum of six characters" },
  ]

  const handler = e => dispatch(updateStore(e.target.name, e.target.value))

  const submitHandler = e => {
    e.preventDefault()
    setStep(currentStep + 1)
  }

  const lastStep = stepz.length

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Header currentStep={currentStep} steps={stepz.map(it => it.title)} />
        <form className="wrapper" onSubmit={submitHandler}>
          {stepz.map((step, i) => {
            return i === currentStep ? (
              <fieldset className="input-field" key={i}>
                <legend className="inlegendut-field__hint">{step.hint}</legend>
                {step.array.map((item, i) => {
                  return (
                    <TextField
                      required
                      key={i}
                      onChange={handler}
                      name={item.name}
                      label={item.label}
                      autoComplete={item.autoComplete}
                      value={item.value}
                      type={item.type}
                      inputProps={item.validation}
                      {...item.props}
                    />
                  )
                })}
              </fieldset>
            ) : null
          })}
          {currentStep === lastStep && <LastScreen data={data} />}
          <ButtonBlock currentStep={currentStep} lastStep={lastStep} stateHandler={setStep} />
        </form>
      </Container>
    </div>
  )
}

export default App
