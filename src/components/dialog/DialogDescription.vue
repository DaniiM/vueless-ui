<script setup>
  import { useDialogContext } from './useDialogContext';

  const { descriptionId } = useDialogContext();
</script>

<template>
  <p :id="descriptionId">
    <slot />
  </p>
</template>

<style scoped></style>
