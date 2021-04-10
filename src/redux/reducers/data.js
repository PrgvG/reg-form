const UPDATE_STORE = "UPDATE_STORE"

const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  birthDate: "",
  email: "",
  password: "",
  repeatPassword: "",
}

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STORE: {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    default:
      return state
  }
}
export function updateStore(key, value) {
  return { type: UPDATE_STORE, value, key }
}
