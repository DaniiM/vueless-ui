<script setup>
  import { ref, onMounted } from 'vue';
  import { usePopoverContext } from './usePopoverContext';

  const popover = usePopoverContext();

  const el = ref(null);

  const props = defineProps({
    as: {
      type: String,
      default: 'span',
    },
    asChild: {
      type: Boolean,
      default: false,
    },
  });

  onMounted(() => {
    popover.triggerRef.value = el.value;
  });
</script>

<template>
  <button
    class="popover-button"
    @click="popover.toggle"
    aria-haspopup="popover"
    :aria-expanded="popover.isOpen.value"
    ref="el"
  >
    <slot />
  </button>
</template>

<style scoped>
  .popover-button {
    background-color: #4f46e5;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;
    user-select: none;
  }
</style>
