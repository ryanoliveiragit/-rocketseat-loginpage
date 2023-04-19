import styled from "styled-components";

export const ContainerButton = styled.button`
margin-top: 2rem;

font-style: normal;
font-weight: 600;
font-size: 1rem;
line-height: 24px;

color: #FFFFFF;

flex: none;
order: 0;
flex-grow: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;

  width: 24rem;
  height: 3.5rem;

  background: #7c3aed;
  border-radius: 4px;
  border: none;

  cursor: pointer;

  :hover {
    transition: background .2s, transform .2s;
    background-color: #9F67FF;
  }
`;
