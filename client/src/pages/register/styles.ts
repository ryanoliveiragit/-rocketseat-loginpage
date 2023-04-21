import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-items: end;
  font-family: Arial, Helvetica, sans-serif;
  width: 24rem;
  .MuiFormHelperText-root {
    margin: 0;
  }
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

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const RegisterContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  span {
    font-weight: 200;
    font-size: 1rem;
    line-height: 24px;

    color: #475569;
  }
  a {
    text-decoration: none;
    font-style: normal;

    font-size: 1rem;
    line-height: 24px;
    font-weight: 600;
    color: #7c3aed;

    flex: none;
    order: 2;
    flex-grow: 0;
  }
`;
export const Fixed = styled.div`
margin-top: 1rem;
`