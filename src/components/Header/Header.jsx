import styled from "styled-components";
import { NavigationBar } from "./NavigationBar/NavigationBar";

export const Header = ({ isLoggedIn, logOut, timerViewer, userViewer }) => {
  return (
    <StyledHeader>
      <h1>A typical page</h1>
      {!isLoggedIn && (
        <NavigationBar
          logingOut={logOut}
          timerview={timerViewer}
          userview={userViewer}
        />
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  background-color: #741088;
  justify-content: space-between;
  padding: 1rem 1rem;
  color: white;
`;
