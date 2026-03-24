// src/utils/dom.js

/**
 * Focus an element if exists
 * @param {HTMLElement} el
 */
export function focusElement(el) {
    if (el && typeof el.focus === 'function') el.focus()
  }
  
  /**
   * Get all tabbable children of a container
   * @param {HTMLElement} container
   * @returns {HTMLElement[]}
   */
  export function getTabbableElements(container) {
    if (!container) return []
    return Array.from(container.querySelectorAll('button, [tabindex]:not([tabindex="-1"])'))
  }