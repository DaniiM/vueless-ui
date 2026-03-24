import { ref } from 'vue'

export function useMenu(initial = false) {
  const isOpen = ref(initial)

  function open() { isOpen.value = true }
  function close() { isOpen.value = false }
  function toggle() { isOpen.value = !isOpen.value }

  return { isOpen, open, close, toggle }
}