export default {
  down(size) {
    const screenWidth = {
      xs: '575.98px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px'
    }
    return `@media(max-width: ${screenWidth[size]})`;
  }
};
