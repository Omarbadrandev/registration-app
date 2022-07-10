export const USER_NAME_INPUT_ID = "username"

export const PASSWORD_INPUT_ID = "password"

export const MATCH_PASSWORD_INPUT_ID = "confirm_pwd"

//  user Regex will be used to validate the username with
export const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
//  password Regex will be used to validate the password with
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/