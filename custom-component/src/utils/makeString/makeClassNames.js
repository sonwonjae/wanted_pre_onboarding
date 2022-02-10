export const makeClassNames = (classList) =>
  [...classList].map((className) => `.${className}`).join('');
