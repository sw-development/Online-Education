const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xlg: 1600,
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
      xxs: "1.4rem",
      xs: "1.6rem",
      sm: "2rem",
      md: "3rem",
      lg: "4rem",
      xlg: "5rem",
    },
  },
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;

    return acc;
  }, {}),
};
