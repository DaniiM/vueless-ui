<script setup>
  import { ref, provide } from 'vue';
  import { TOOLTIP_CTX } from './context';

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
    },
  });

  let openTimeout = null;
  let closeTimeout = null;

  function scheduleOpen() {
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
    clearTimeout(openTimeout);
    clearTimeout(closeTimeout);

    isOpen.value = true;
  }

  function closeNow() {
    clearTimeout(openTimeout);
    clearTimeout(closeTimeout);

    isOpen.value = falseß;
  }

  function cancelClose() {
    clearTimeout(closeTimeout);
  }

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
  <div class="tooltip-root">
    <slot />
  </div>
</template>

<style scoped>
  .tooltip-root {
    position: relative;
    display: inline-block;
  }
</style>
