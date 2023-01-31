import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
    };
    return users;
  }, []);
  return (
    <Container>
      {users.map((user) => {
        return (
          <ListContainer>
            <Li>{user.name}</Li>
            <Li>{user.username}</Li>
            <Li>{user.email}</Li>
            <Li>{user.phone}</Li>
          </ListContainer>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ListContainer = styled.ul`
  margin-top: 1rem;
  width: fit-content;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: antiquewhite;
`;

const Li = styled.li`
  list-style: none;
`;
