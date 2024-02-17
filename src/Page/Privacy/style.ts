import styled from "styled-components";

const Container = styled.div`
  widows: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 20px 0 20px;
  }

  > form {
    display: flex;
    flex-direction: column;

    > label {
      margin-bottom: 20px;
      > .title {
        padding-bottom: 10px;
        color: #fafafa;
        font-size: 1.5em;
      }

      > input {
        padding: 10px;

        width: 250px;
        height: 30px;

        border: none;
        border-radius: 2vh;
        outline: none;
      }
    }
    > button {
      margin-top: 30px;

      width: 100%;
      height: 30px;

      font-size: 1.2em;
      color: #4b89dc;
      border: none;
      border-radius: 2vh;
      background-color: #fafafa;
    }
  }
`;

const Error = styled.p`
  color: #fafafa;
`;

export { Container, Error };
