import React from "react";
import styled from "styled-components";

export default function Heading({ title,color }) {
  return <H1 className="heading" color={color}>{title}</H1>;
}

const H1 = styled.h1`

color:${({ theme,color }) => theme.colors[color]}
}
`;
