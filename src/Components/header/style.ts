import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100px;

  > h1 {
    padding: 0 10px 0 10px;
    font-size: 2.2em;
    color: #fafafa;

    @media screen and (max-width: 280px) {
      font-size: 2em;
    }
  }
`;

export { Header };
