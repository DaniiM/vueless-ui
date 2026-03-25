<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import { moveIndex, getKeyAction } from '../../utils/keyboard.js'
import { focusElement } from '../../utils/dom.js'

const isOpen = ref(false)
const items = ref([])
const activeIndex = ref(-1)
const menuRef = ref(null);

function toggle() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    items.value = [] // reset value before registration
    activeIndex.value = 0
    nextTick(() => focusItem(activeIndex.value))
  }
}

function close() {
  isOpen.value = false
  activeIndex.value = -1
}

function registerItem(el) {
  if (el && !items.value.includes(el)) {
    items.value.push(el)
  }
}

function focusItem(index) {
  nextTick(() => focusElement(items.value[index]))
}

function handleKey(e) {
  const action = getKeyAction(e)
  if (!action || !isOpen.value) return

  if (action === 'down' || action === 'up') {
    e.preventDefault()
    activeIndex.value = moveIndex(activeIndex.value, items.value.length, action)
    focusItem(activeIndex.value)
  } else if (action === 'esc') {
    close()
  } else if (action === 'enter') {
    e.preventDefault()
    if (items.value[activeIndex.value]) items.value[activeIndex.value].click()
  }
}

function handleOutsideClick(e) {
  if (!menuRef.value || !isOpen.value) return

  // if clicked outside - close menu
  if (!menuRef.value.contains(e.target)) {
    close()
  }
}

onMounted(() => {
    document.addEventListener('mousedown',handleOutsideClick)
})

onUnmounted(() => {
    document.removeEventListener('mousedown',handleOutsideClick)
})
</script>

<template>
  <div ref="menuRef" class="menu-wrapper" @keydown="handleKey" tabindex="0">
    <slot :is-open="isOpen" :toggle="toggle" :register-item="registerItem" />
  </div>
</template>

<style scoped>
.menu-wrapper {
  display: inline-block;
  position: relative;
  font-family: Arial, sans-serif;
}
</style>