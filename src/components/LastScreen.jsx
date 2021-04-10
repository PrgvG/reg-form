import React from "react"

function LastScreep({ data }) {
  return (
    <fieldset className="input-field">
      <h2>Congratulations traveler you have reached the end</h2>
      <div>
        Your name: <b>{data.firstName}</b>
      </div>
      <div>
        Your middle name: <b>{data.middleName}</b>
      </div>
      <div>
        Your last name: <b>{data.lastName}</b>
      </div>
      <div>
        Your birth date: <b>{data.birthDate}</b>
      </div>
      <div>
        Your email: <b>{data.email}</b>
      </div>
      <br />
    </fieldset>
  )
}

export default LastScreep
