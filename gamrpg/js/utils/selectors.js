/**
 * 
 * @param {string} selector 
 * @param {HTMLElement} nodo 
 * @returns {HTMLElement}
 */
export function $(selector, nodo = document.body){
  return nodo.querySelector(selector)
}

export function $$(selector, nodo = document.body){
  return [...nodo.querySelectorAll(selector)]
}
