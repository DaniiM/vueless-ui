<script setup>
  import { ref, onMounted } from 'vue';
  import { useTooltipContext } from './useTooltipContext';

  const { scheduleOpen, scheduleClose, triggerRef, tooltipId } = useTooltipContext();

  const el = ref(null);

  const props = defineProps({
    as: {
      type: String,
      default: 'span',
    },
    asChild: Boolean,
  });

  onMounted(() => {
    triggerRef.value = el.value;
  });
</script>

<template>
  <component
    v-if="!props.asChild"
    :is="props.as"
    ref="el"
    @mouseenter="scheduleOpen"
    @mouseleave="scheduleClose"
    @focus="openNow"
    @blur="closeNow"
    :aria-describedby="tooltipId"
  >
    <slot />
  </component>

  <slot
    v-else
    ref="el"
    @mouseenter="scheduleOpen"
    @mouseleave="scheduleClose"
    @focus="openNow"
    @blur="closeNow"
  />
</template>
