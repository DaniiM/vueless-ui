<script setup>
  import { ref, nextTick, onMounted, onUnmounted, provide } from 'vue';
  import { moveIndex, getKeyAction } from '../../utils/keyboard.js';
  import { focusElement } from '../../utils/dom.js';
  import { MENU_CTX } from './context';

  const isOpen = ref(false);
  const items = ref(null);
  const activeIndex = ref(-1);
  const menuRef = ref(null);

  function toggle() {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
      items.value = [];
      activeIndex.value = 0;
      nextTick(() => focusItem(activeIndex.value));
    }
  }

  function close() {
    isOpen.value = false;
    activeIndex.value = -1;
  }

  function registerItem(el) {
    if (el && !items.value.includes(el)) {
      items.value.push(el);
    }
  }

  function focusItem(index) {
    nextTick(() => focusElement(items.value[index]));
  }

  function handleKey(e) {
    const action = getKeyAction(e);
    if (!action || !isOpen.value) return;

    if (action === 'down' || action === 'up') {
      e.preventDefault();
      activeIndex.value = moveIndex(activeIndex.value, items.value.length, action);
      focusItem(activeIndex.value);
    } else if (action === 'esc') {
      close();
    } else if (action === 'enter') {
      e.preventDefault();
      items.value[activeIndex.value]?.click();
    }
  }

  function handleOutsideClick(e) {
    if (!menuRef.value || !isOpen.value) return;
    if (!menuRef.value.contains(e.target)) close();
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleOutsideClick);
  });

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleOutsideClick);
  });

  provide(MENU_CTX, {
    isOpen,
    toggle,
    close,
    registerItem,
    activeIndex,
  });
</script>

<template>
  <div ref="menuRef" class="menu-wrapper" @keydown="handleKey" tabindex="0">
    <slot />
  </div>
</template>

<style scoped>
  .menu-wrapper {
    display: inline-block;
    position: relative;
  }
</style>
