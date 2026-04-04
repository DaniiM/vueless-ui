<script setup>
  import { ref, provide, watch } from 'vue';
  import { DIALOG_CTX } from './context';

  const isOpen = ref(false);
  const titleId = `dialog-title${Math.random().toString(36).slice(2)}`;
  const descriptionId = `dialog-description${Math.random().toString(36).slice(2)}`;

  function toggle() {
    isOpen.value = !isOpen.value;
  }

  function open() {
    isOpen.value = true;
  }

  function close() {
    isOpen.value = false;
  }

  watch(isOpen, (open) => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  provide(DIALOG_CTX, {
    isOpen,
    toggle,
    open,
    close,
    titleId,
    descriptionId,
  });
</script>

<template>
  <slot />
</template>

<style scoped></style>
