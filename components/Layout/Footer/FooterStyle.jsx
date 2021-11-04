import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #010101;
  color: #fff;
  padding: 100px 50px 0;
  @media (max-width: 998px) {
    padding: 100px 20px;
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
  .icon {
    font-size: 60px;
  }
  .quick__links {
    li a {
      color: #fff;
      font-size: 18px;
    }
  }
  .address,
  .email,
  .phone {
    a {
      color: #fff;
      :hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
  .copyright {
    margin-top: 100px;
    border-top: 2px solid rgba(255, 255, 255, 0.15);
    padding: 10px 0;
    text-align: center;
  }
`;
