import React, { useRef, useState, useEffect } from "react"
import Input from "../../Input"
import Label from "../../Label"
import Note from "../../Note"
import { handleUserSubmit } from "../../../utils/handleUserRegistration"
import { ErrorMsgParagraph } from "../../ErrMsg"
import FormButton from "../../FormButton"
import {
  MATCH_PASSWORD_INPUT_ID,
  PASSWORD_INPUT_ID,
  PWD_REGEX,
  USER_NAME_INPUT_ID,
  USER_REGEX
} from "../../../constants"
import FormFooter from "../../FormFooter"
import SuccessSection from "../../SuccessSection"
import Title from "../../Title"

const Register = () => {
  //this will alow us to set the focus on the user input when the components loads
  const userRef = useRef<HTMLInputElement>(null)
  //this is an error reference we
  const errRef = useRef<HTMLParagraphElement>(null)

  const [user, setUser] = useState("")
  // this state for used for check wether the name validates or not
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [pwd, setPwd] = useState("")
  const [validPwd, setValidPwd] = useState(false)
  console.log(validPwd)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState("")
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [success, setSuccess] = useState(false)

  const [errMsg, setErrMsg] = useState("")

  useEffect(() => {
    // the first time we apply it is going to be
    // for setting the focus when the component loads
    // to do so well have to reference that user ref on that input.
    userRef.current?.focus()
  }, [])

  useEffect(() => {
    // RegExp.test(string: string): boolean
    // Returns a Boolean value that indicates whether or
    // not a pattern exists in a searched string.
    const result = USER_REGEX.test(user)
    console.log(result)
    console.log(user)
    setValidName(result)
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd)
    console.log(result)
    console.log(pwd)
    setValidPwd(result)
    // this is to check wether the password and the password match is matching
    const match = pwd === matchPwd
    setValidMatch(match)
  }, [pwd, matchPwd])

  useEffect(() => {
    // each time the user changes one of these three state pieces in
    // the dependency array and then we will go ahead and clear out the error msg
    // because the user has already read the error msg and he is only adjusting these fields
    setErrMsg("")
  }, [user, pwd, matchPwd])

  const UserNameNoteContent = () => {
    return (
      <>
        4 to 24 characters. <br />
        Must begin with a letter. <br />
        Letters, numbers, underscores, hyphens allowed.
      </>
    )
  }

  const PwdNoteContent = () => {
    return (
      <>
        8 to 24 characters.
        <br />
        Must include uppercase and lowercase letters, a number and a special
        character.
        <br />
        {/* NOTE: We use aria-label description so that the screen reader can read the description of each special character */}
        Allowed special characters: <span aria-label="exclamation mark">!</span>{" "}
        <span aria-label="at symbol">@</span>
        <span aria-label="hashtag">#</span>{" "}
        <span aria-label="dollar sign">$</span>{" "}
        <span aria-label="percent">%</span>
      </>
    )
  }

  const RegistrationInputs = [
    {
      validVal: validName,
      setInputVal: setUser,
      setInputValFocus: setUserFocus,
      inputRef: userRef,
      val: user,
      labelText: "Username:",
      note: (
        <Note
          focus={userFocus}
          val={user}
          validVal={validName}
          children={<UserNameNoteContent />}
          id={"uidnote"}
        />
      ),
      inputType: "text",
      inputId: USER_NAME_INPUT_ID
    },
    {
      validVal: validPwd,
      setInputVal: setPwd,
      setInputValFocus: setPwdFocus,
      val: pwd,
      note: (
        <Note
          focus={pwdFocus}
          validVal={validPwd}
          val={pwd}
          children={<PwdNoteContent />}
          id={"pwdnote"}
        />
      ),
      labelText: "Password:",
      inputId: PASSWORD_INPUT_ID,
      inputType: "password"
    },
    {
      validVal: validMatch,
      setInputVal: setMatchPwd,
      setInputValFocus: setMatchFocus,
      val: matchPwd,
      note: (
        <Note
          id={"confirmnote"}
          focus={matchFocus}
          validVal={validMatch}
          // id={MATCH_PASSWORD_INPUT_ID}
          val={matchPwd}
          children={<>Must match the first password input field.</>}
        />
      ),
      labelText: "Confirm Password:",
      inputId: MATCH_PASSWORD_INPUT_ID,
      inputType: "password"
    }
  ]

  return (
    <>
      {success ? (
        <SuccessSection
          title={"Success!"}
          linkText={"Sign In"}
          link={"login"}
        />
      ) : (
        <section>
          <ErrorMsgParagraph {...{ errRef }} {...{ errMsg }} />
          <Title title={"Register"} />
          <form
            onSubmit={(e) =>
              handleUserSubmit(e, { user, pwd, setErrMsg, setSuccess })
            }
          >
            {RegistrationInputs.map((input) => (
              <Input
                validVal={input.validVal}
                setInputVal={input.setInputVal}
                setInputValFocus={input.setInputValFocus}
                inputRef={input.inputRef}
                note={input.note}
                label={
                  <Label
                    validVal={input.validVal}
                    val={input.val}
                    labelText={input.labelText}
                    contentPropertyValue={input.inputId}
                    variant={"registration"}
                  />
                }
                inputType={input.inputType}
                inputId={input.inputId}
                key={input.inputId}
              />
            ))}
            <FormButton
              disabled={!validName || !validPwd || !validMatch ? true : false}
              text={"Sign Up"}
            />
          </form>
          <FormFooter
            caption={"Already registered?"}
            linkText={"Sign In"}
            link={"login"}
          />
        </section>
      )}
    </>
  )
}

export default Register
