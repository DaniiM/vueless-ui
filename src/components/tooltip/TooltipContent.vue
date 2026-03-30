<script setup>
  import { ref, onMounted } from 'vue';
  import { useTooltipContext } from './useTooltipContext';

  const { isOpen, contentRef, scheduleClose, cancelClose } = useTooltipContext();

  const el = ref(null);

  onMounted(() => {
    contentRef.value = el.value;
  });
</script>

<template>
  <div v-if="isOpen" ref="el" role="tooltip" @mouseenter="cancelClose" @mouseleave="scheduleClose">
    <slot />
  </div>
</template>
