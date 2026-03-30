<script setup>
  import { ref, provide, onBeforeUnmount, onMounted } from 'vue';
  import { TOOLTIP_CTX } from './context';
  import { getKeyAction } from '../../utils/keyboard.js';

  const isOpen = ref(false);
  const triggerRef = ref(null);
  const contentRef = ref(null);

  const openDelay = 150;
  const closeDelay = 100;

  const tooltipId = `tooltip-${Math.random().toString(36).slice(2)}`;

  const props = defineProps({
    placement: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });

  let openTimeout = null;
  let closeTimeout = null;

  function scheduleOpen() {
    if (props.disabled) return;

    clearTimeout(closeTimeout);

    openTimeout = setTimeout(() => {
      isOpen.value = true;
    }, openDelay);
  }

  function scheduleClose() {
    clearTimeout(openTimeout);

    openTimeout = setTimeout(() => {
      isOpen.value = false;
    }, closeDelay);
  }

  function openNow() {
    if (props.disabled) return;

    clearTimeout(openTimeout);
    clearTimeout(closeTimeout);

    isOpen.value = true;
  }

  function closeNow() {
    clearTimeout(openTimeout);
    clearTimeout(closeTimeout);

    isOpen.value = false;
  }

  function cancelClose() {
    clearTimeout(closeTimeout);
  }

  function handleKey(event) {
    const action = getKeyAction(event);

    if (action === 'esc' && isOpen.value) {
      closeNow();
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKey);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKey);

    clearTimeout(openTimeout);
    clearTimeout(closeTimeout);
  });

  onBeforeUnmount(() => {
    clearTimeout(openTimeout);
    clearTimeout(closeTimeout);
  });

  provide(TOOLTIP_CTX, {
    isOpen,
    scheduleOpen,
    scheduleClose,
    cancelClose,
    openNow,
    closeNow,
    triggerRef,
    contentRef,
    placement: props.placement,
    tooltipId,
  });
</script>

<template>
  <div class="tooltip-root" :aria-disabled="disabled">
    <slot />
  </div>
</template>

<style scoped>
  .tooltip-root {
    position: relative;
    display: inline-block;
  }
</style>
