import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: relative;
  background-color: #fff;
  box-shadow: 0px -30px 15px 29px rgba(0, 0, 0, 0.15);
  padding: 0 50px;
  @media (max-width: 998px) {
    padding: 0;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  .active {
    display: flex !important;
    transition: all 1s ease-in-out;
  }
  .active-item {
    color: ${({ theme }) => theme.colors.secondary} !important;
  }

  .icon {
    font-size: 60px;
    color: ${({ theme }) => theme.colors.primary};
    display: none;
    @media (max-width: 998px) {
      display: flex;
    }
  }

  h1 {
    font-size: 40px;
    @media (max-width: 998px) {
      font-size: 30px;
    }
    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  a {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    :hover {
      color: ${({ theme }) => theme.colors.secondary};
      transition: all 0.3s ease;
    }
  }
  .menu {
    justify-content: space-evenly;
    @media (max-width: 998px) {
      position: absolute;
      left: 0;
      top: 0;
      flex-direction: column;
      justify-content: space-evenly;
      width: 70%;
      height: 100vh;
      padding-left: 30px;
      display: none;
      background-color: ${({ theme }) => theme.colors.primary};
      li a {
        color: #fff;
        :hover {
          color: ${({ theme }) => theme.colors.secondary};
          transition: all 0.3s ease;
        }
      }
    }
  }
`;
