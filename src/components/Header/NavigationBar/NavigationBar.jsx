import React from "react";
import styled from "styled-components";
import { Button } from "../../UI/Button/Button";

export const NavigationBar = ({ logingOut, timerview, userview }) => {
  return (
    <>
      <StyledNavBar>
        <Users onClick={userview}>USERS</Users>
        <Timer onClick={timerview}>TIMER</Timer>
        <Button onClick={logingOut}>LogOut</Button>
      </StyledNavBar>
    </>
  );
};
const StyledNavBar = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;
const Users = styled.p`
  cursor: pointer;
  border: 2px solid black;
  border-radius: 1rem;
  padding: 0.5rem 0.8rem;
  background-color: rgb(116, 16, 136);

  :hover {
    background-color: rgb(130, 0, 211);
    color: white;
  }
`;

const Timer = styled.p`
  cursor: pointer;
  border: 2px solid black;
  padding: 10px;
  padding: 0.5rem 0.8rem;
  background-color: rgb(116, 16, 136);
  border-radius: 1rem;
  :hover {
    background-color: rgb(130, 0, 211);
    color: white;
  }
`;
