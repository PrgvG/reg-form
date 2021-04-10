import React from "react"

function Header({ currentStep, steps }) {
  const lastStep = steps.length
  return (
    <header className="header">
      {currentStep === lastStep ? (
        <div className="header__state">Good for you!</div>
      ) : (
        steps.map((it, i) => {
          return i <= currentStep ? (
            <div className="header__state" key={i}>
              {it}
            </div>
          ) : null
        })
      )}
    </header>
  )
}

export default Header
