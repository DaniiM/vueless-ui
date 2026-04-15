<script setup>
  import { provide, ref, watch, nextTick } from 'vue';
  import { POPOVER_CTX } from './context';
  import { focusElement } from '../../utils/dom.js';

  const isOpen = ref(false);
  const triggerRef = ref(null);
  const contentRef = ref(null);

  const props = defineProps({
    placement: {
      type: String,
      default: 'center',
    },
  });

  function toggle() {
    isOpen.value = !isOpen.value;
  }

  function open() {
    isOpen.value = true;
  }

  function close() {
    isOpen.value = false;
  }

  watch(isOpen, async (open) => {
    if (open) {
      await nextTick();
      const focusable = contentRef.value.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        contentRef.value.focus();
      }
    } else {
      triggerRef.value?.focus();
    }
  });

  provide(POPOVER_CTX, {
    isOpen,
    toggle,
    open,
    close,
    triggerRef,
    contentRef,
    placement: props.placement,
  });
</script>

<template>
  <div class="popover-wrapper">
    <slot />
  </div>
</template>

<style scoped>
  .popover-wrapper {
    display: inline-block;
    position: relative;
  }
</style>
