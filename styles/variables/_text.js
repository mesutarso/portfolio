import { responsive } from "./_breakpoint";
import { css } from "styled-components";

export const heading = css`
  font-size: 3.7em;
  text-align: left;
  font-weight: 700;
  ${responsive.md`
    font-size: 3em;
    text-align: center;
  `}

  ${responsive.sm`
    font-size: 1.9em;
    text-align: center;
  `};
`;
export const subHeading = css`
  font-size: 2.966em;
  text-align: left;
  ${responsive.md`
    font-size: 2.610em;
    text-align: center;
  `}

  ${responsive.sm`
  font-size: 1.660em;
    text-align: center;
  `};
`;
export const body = css`
  font-size: 1.4em;
  text-align: left;
  ${responsive.md`
    font-size: 1em;
    text-align: center;
  `}

  ${responsive.sm`
  font-size: 0.9em;
    text-align: center;
  `};
`;
