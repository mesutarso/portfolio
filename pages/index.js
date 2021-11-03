import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return <Title className="heading">My page</Title>;
}
