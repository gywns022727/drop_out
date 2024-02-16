import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100px;

    > h1 {
      padding: 0 10px 0 10px;

      font-size: 2.2em;

      color: #fafafa;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
  }
`;

export { Container };
