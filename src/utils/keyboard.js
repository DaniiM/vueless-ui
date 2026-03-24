// src/utils/keyboard.js

/**
 * Move active index up or down in a circular way
 * @param {number} currentIndex
 * @param {number} totalItems
 * @param {string} direction - 'up' | 'down'
 * @returns {number} newIndex
 */
export function moveIndex(currentIndex, totalItems, direction) {
    if (direction === 'down') {
      return (currentIndex + 1) % totalItems
    } else if (direction === 'up') {
      return (currentIndex - 1 + totalItems) % totalItems
    }
    return currentIndex
  }
  
  /**
   * Handle keyboard events and return the action
   * @param {KeyboardEvent} e
   * @returns {string|null} - 'up', 'down', 'enter', 'esc', null
   */
  export function getKeyAction(e) {
    const key = e.key
    if (key === 'ArrowDown') return 'down'
    if (key === 'ArrowUp') return 'up'
    if (key === 'Enter' || key === ' ') return 'enter'
    if (key === 'Escape') return 'esc'
    return null
  }