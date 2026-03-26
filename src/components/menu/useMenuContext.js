import { inject } from 'vue'
import { MENU_CTX } from './context'

export function useMenuContext() {
  const menu = inject(MENU_CTX)

  if (!menu) {
    throw new Error('Menu components must be used inside <Menu>')
  }

  return menu
}