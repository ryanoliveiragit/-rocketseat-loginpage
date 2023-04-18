import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-items: end;
  font-family: Arial, Helvetica, sans-serif;
  width: 24rem;

  input {
    height: 2.5rem;
  }
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 0.85rem;
  line-height: 21px;

  color: #1e293b;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ForgotMyPassword = styled(Label)`
  color: #1e293b;
  a {
    text-decoration: none;
    font-style: normal;

    font-size: 0.85rem;
    line-height: 24px;
    font-weight: 600;
    color: #7c3aed;

    flex: none;
    order: 2;
    flex-grow: 0;
  }
`;
