export const USER_NAME_INPUT_ID = 'username';

export const PASSWORD_INPUT_ID = 'password';

export const MATCH_PASSWORD_INPUT_ID = 'confirm_pwd';

// Regex statements
// Image result for regex statements
// A regular expression (shortened as regex or regexp; sometimes referred to as rational expression)
// is a sequence of characters that specifies a search pattern in text.
// Usually such patterns are used by string-searching algorithm
//  for "find" or "find and replace" operations on strings, or for input validation.

//  user Regex will be used to validate the username with
export const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//  password Regex will be used to validate the password with
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
