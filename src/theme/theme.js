const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

export const theme = {
  colors: {
    white: "#fff",
  },
  font: {
    weight: {
      thin: 300,
      regular: 400,
      bold: 800,
    },
    size: {
      xxs: "1.2rem",
      xs: "1.4rem",
      sm: "1.6rem",
      md: "1.8rem",
      lg: "2rem",
      xlg: "3rem",
    },
  },
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;

    return acc;
  }, {}),
};
