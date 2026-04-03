<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { useDialogContext } from './useDialogContext';

  const { isOpen, close, titleId, descriptionId } = useDialogContext();

  const contentRef = ref(null);

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      close();
    }
  }

  function handleClickOutside(event) {
    if (contentRef.value && !contentRef.value.contains(event.target)) {
      close();
    }
  }

  function handleTab(event) {
    if (event.key !== 'Tab') return;

    const focusable = contentRef.value.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        event.preventDefault();
        first.focus;
      }
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('keydown', handleTab);
    window.addEventListener('mousedown', handleClickOutside);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('mousedown', handleClickOutside);
  });
</script>

<template>
  <Transition name="dialog-content">
    <div
      v-if="isOpen"
      ref="contentRef"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="titleId"
      :aria-describedby="descriptionId"
      class="dialog-content"
    >
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
  .dialog-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
    background: white;
    border-radius: 12px;
    padding: 24px;
    min-width: 320px;
  }

  .dialog-content-enter-active,
  .dialog-content-leave-active {
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  .dialog-content-enter-from,
  .dialog-content-leave-to {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
</style>
