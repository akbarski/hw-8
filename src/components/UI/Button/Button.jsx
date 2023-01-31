import React from "react";
import styled from "styled-components";
export const Button = ({ children, bgColor, disabled, onClick }) => {
  return (
    <StyledButton bgColor={bgColor} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  padding: 0.5rem 0.8rem;
  background-color: ${(props) =>
    props.bgColor ? "rgb(116, 16, 136)" : "violet"};
  border-radius: 1rem;
  :disabled {
    background-color: gray;
  }

  :hover {
    background-color: rgb(130, 0, 211);
    color: white;
  }
`;
