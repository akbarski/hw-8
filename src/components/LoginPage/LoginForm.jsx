import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button/Button";
import { Card } from "../UI/Card/Card";
export const LoginForm = ({ loggedIn }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setIsEmailValid(enteredEmail.includes("@"));
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
    setIsPasswordValid(enteredPassword.trim().length >= 6);
  };

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    loggedIn();
  };

  return (
    <Card>
      <form>
        <StyledInputContainer>
          <label htmlFor="">Email</label>
          <input
            type="text"
            onChange={emailChangeHandler}
            value={enteredEmail}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
          />
        </StyledInputContainer>
        <Button
          bgColor={"success"}
          disabled={!isFormValid}
          onClick={submitHandler}
        >
          Login
        </Button>
      </form>
    </Card>
  );
};

const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
