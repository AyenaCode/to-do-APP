// fontions pour céer des éléments
/**
 * @param {string} tag - le nom de la balise html
 * @param {object} atributes - les attributs de l'élément
 * @returns {HTMLElement} - l'élément cré
 */

export const createElement = (tag, atributs) => {
  const element = document.createElement(tag);
  for (const key in atributs) {
    element.setAttribute(key, atributs[key]);
  }
  return element;
};
