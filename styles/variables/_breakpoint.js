import { css } from "styled-components";
const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
};

export const responsive = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
