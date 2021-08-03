export const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  tabletL: '1000px',
  laptop: '1024px',
  laptopM: '1250px',
  laptopL: '1440px',
  desktop: '2560px',
  smallTablet: '600px',
};

export default {
  sizes,
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  smallTablet: `(max-width: ${sizes.smallTablet})`,
  tablet: `(max-width: ${sizes.tablet})`,
  tabletL: `(max-width: ${sizes.tabletL})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopM: `(max-width: ${sizes.laptopM})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};
