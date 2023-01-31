import styled from "styled-components";

export const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding: 2rem 1.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  width: 30vw;
  border-radius: 1rem;
  margin: 0 auto;
`;
