<script setup>
  import { useDialogContext } from './useDialogContext';

  const props = defineProps({
    as: {
      type: String,
      default: 'button',
    },
  });

  const { toggle } = useDialogContext();
</script>

<template>
  <component :is="props.as" type="button" @click="toggle">
    <slot />
  </component>
</template>

<style scoped></style>
