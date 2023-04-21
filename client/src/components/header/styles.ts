import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  background-color: #7c3aed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.5rem;
    color: white;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
  li {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    padding: .5rem;
    font-weight: 400;

    :hover {
      transition: background 0.2s, transform 0.2s;
      background-color: #9f67ff;
    }
  }
`;
