<script setup>
  import { ref, onMounted } from 'vue';
  import { useTooltipContext } from './useTooltipContext';

  const { scheduleOpen, scheduleClose, triggerRef } = useTooltipContext();

  const el = ref(null);

  onMounted(() => {
    triggerRef.value = el.value;
  });
</script>

<template>
  <span
    ref="el"
    @mouseenter="scheduleOpen"
    @mouseleave="scheduleClose"
    @focus="openNow"
    @blur="closeNow"
  >
    <slot />
  </span>
</template>
