import React from "react"
import { Button } from "@material-ui/core"

function ButtonBlock({ currentStep, lastStep, stateHandler }) {
  const disableHandler = val => (currentStep === val ? { disabled: true } : { disabled: false })
  const backBtn = e => {
    e.preventDefault()
    stateHandler(currentStep - 1)
  }

  return (
    <div>
      <Button {...disableHandler(0)} variant="contained" color="secondary" onClick={backBtn}>
        Prev step
      </Button>
      <Button {...disableHandler(lastStep)} variant="contained" color="primary" type="submit">
        Next step
      </Button>
    </div>
  )
}

export default ButtonBlock
