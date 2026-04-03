<script setup>
  import { useDialogContext } from './useDialogContext';

  const { titleId } = useDialogContext();
</script>

<template>
  <h2 :id="titleId">
    <slot />
  </h2>
</template>

<style scoped></style>
