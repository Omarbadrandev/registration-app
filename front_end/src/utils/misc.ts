export const checkValidEntry = (condition: boolean) => {
  const errMsg = "Invalid Entry"
  if (!condition) {
    throw new Error("condition is not available")
  } else if (condition === true) {
    return errMsg
  } else {
    return ""
  }
}


