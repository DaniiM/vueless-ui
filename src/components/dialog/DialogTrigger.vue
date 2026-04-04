<script setup>
  import { useDialogContext } from './useDialogContext';

  const props = defineProps({
    as: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });

  const { toggle } = useDialogContext();

  function handleClick() {
    if (props.disabled) return;

    toggle();
  }
</script>

<template>
  <component
    :is="props.as"
    type="button"
    @click="handleClick"
    class="dialog-button"
    :disabled="props.disabled"
  >
    <slot />
  </component>
</template>

<style scoped>
  .dialog-button {
    background-color: #459cf4;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;
    user-select: none;
    transition: color 0.5s ease;
  }

  .dialog-button:hover {
    background-color: #88bdf2;
  }

  .dialog-button:focus {
    outline: 2px solid #bdddfc;
    outline-offset: 2px;
  }

  .dialog-button:disabled {
    background-color: #6b7280;
    cursor: not-allowed;
  }

  .dialog-button:disabled:hover {
    background-color: #384959;
    cursor: not-allowed;
  }

  .dialog-button:disabled:focus {
    background-color: #384959;
    cursor: not-allowed;
  }
</style>
