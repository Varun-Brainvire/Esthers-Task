const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
};

export const device = {
  mobileS: `max-width: ${size.mobileS}`,
  mobileM: `max-width: ${size.mobileM}`,
  mobileL: `max-width: ${size.mobileL}`,
  tablet: `min-width: ${size.tablet}`,
};

export const deviceSize = size;
