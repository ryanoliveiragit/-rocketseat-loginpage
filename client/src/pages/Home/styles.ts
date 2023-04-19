import styled from "styled-components";


export const Container = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const Box = styled.div`

padding: 0%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0rem;
    gap: 1rem;
    width: 24rem;
    margin-bottom: 2.5rem;

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 2.25rem;
      line-height: 55px;
      color: #1e293b;

      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      color: #475569;

      flex: none;
      order: 1;
      flex-grow: 0;
    }
  }
`;

export const Background = styled.div`
     background-color: red;
  padding: 0%;
  width: 50vw;
  height: 99.6vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`