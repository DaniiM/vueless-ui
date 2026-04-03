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
  <component :is="$props.as" type="button" @click="close"> <slot /> </component>
</template>

<style scoped></style>
