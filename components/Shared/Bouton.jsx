import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

export default function Bouton({ title, link }) {
  const router = useRouter();
  return (
    <Btn type="button" className="mt-3" onClick={() => router.push(`/${link}`)}>
      {title}
    </Btn>
  );
}

const Btn = styled.button`
  outline: none;
  padding: 16px 25px;
  border: none;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease-in-out;
  }
`;
