<script setup>
  import { useDialogContext } from './useDialogContext';

  const { isOpen, close } = useDialogContext();
</script>

<template>
  <Transition name="dialog-overlay">
    <div v-if="isOpen" class="dialog-overlay" @click="close" />
  </Transition>
</template>

<style scoped>
  .dialog-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .dialog-overlay-enter-active,
  .dialog-overlay-leave-active {
    transition: opacity 0.2s ease;
  }

  .dialog-overlay-enter-from,
  .dialog-overlay-leave-to {
    opacity: 0;
  }
</style>
