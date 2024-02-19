import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > .downloadBox {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    background-color: #4b89dc;
    > div {
      p {
        padding-bottom: 20px;

        color: #fafafa;
      }
    }
  }
  > .btnBox {
    > button {
      margin-right: 10px;

      width: 70px;
      height: 25px;

      font-size: 0.8em;
      color: #4b89dc;
      border: none;
      border-radius: 2vh;
      background-color: #fafafa;
    }
  }

  > p {
    padding-top: 10px;

    font-size: 0.8em;
    color: #e2e2e2;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.3);
`;

const PopUpBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;

  width: 380px;

  border: 5px solid white;
  background-color: #4b89dc;

  > h2 {
    padding: 10px 0 10px 0;
    text-align: center;
    color: #8ce3e9;

    @media screen and (max-width: 360px) {
      font-size: 1.3em;
    }

    @media screen and (max-width: 280px) {
      font-size: 1em;
    }
  }

  > hr {
    margin-bottom: 20px;
    width: 100%;
    background-color: #fafafa;
  }

  > div {
    > p {
      padding-bottom: 5px;
      color: #fafafa;
      font-size: 0.9em;

      @media screen and (max-width: 360px) {
        font-size: 0.8em;
      }

      @media screen and (max-width: 280px) {
        font-size: 0.6em;
      }
    }
  }

  > button {
    margin-top: 10px;

    width: 100px;
    height: 30px;

    color: #fafafa;
    border: none;
    border-radius: 1vh;
    background-color: #7897d1;
  }
`;

export { Container, PopUpBox, Background };
