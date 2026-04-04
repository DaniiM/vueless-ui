<script setup>
  import { useDialogContext } from './useDialogContext';

  const props = defineProps({
    as: {
      type: String,
      default: 'button',
    },
  });

  const { close } = useDialogContext();
</script>

<template>
  <component :is="$props.as" type="button" @click="close" class="close-button">
    <slot />
  </component>
</template>

<style scoped>
  .close-button {
    background-color: #6b7280;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    transition: background-color 0.2s;
  }

  .close-button:hover {
    outline: 2px solid #4d5159;
    outline-offset: 2px;
  }
</style>
