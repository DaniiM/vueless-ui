<script setup>
  import { ref, onMounted } from 'vue';
  import { useTooltipContext } from './useTooltipContext';

  const { isOpen, contentRef, scheduleClose, cancelClose, placement, tooltipId } =
    useTooltipContext();

  const placementClasses = {
    top: 'tooltip--top',
    bottom: 'tooltip--bottom',
    left: 'tooltip--left',
    right: 'tooltip--right',
  };

  const el = ref(null);

  onMounted(() => {
    contentRef.value = el.value;
  });
</script>

<template>
  <Transition name="tooltip">
    <div
      v-if="isOpen"
      ref="el"
      role="tooltip"
      :id="tooltipId"
      :class="['tooltip', placementClasses[placement]]"
      @mouseenter="cancelClose"
      @mouseleave="scheduleClose"
    >
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
  .tooltip {
    position: absolute;
    z-index: 1000;
  }

  .tooltip--top {
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
  }

  .tooltip--bottom {
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
  }

  .tooltip--left {
    right: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%);
  }

  .tooltip--right {
    left: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%);
  }

  .tooltip-enter-active,
  .tooltip-leave-active {
    transition:
      opacity 0.15s ease,
      transform 0.15s ease;
  }

  .tooltip-enter-from,
  .tooltip-leave-to {
    opacity: 0;
    transform: translateY(4px);
  }

  .tooltip-enter-to,
  .tooltip-leave-from {
    opacity: 1;
  }
</style>
