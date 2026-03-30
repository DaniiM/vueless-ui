<script setup>
  import { onMounted, ref, nextTick } from 'vue';
  import { useMenuContext } from './useMenuContext';

  const props = defineProps({
    disabled: Boolean,
  });

  const menu = useMenuContext();
  const el = ref(null);

  onMounted(() => {
    nextTick(() => {
      if (!props.disabled && el.value) {
        menu.registerItem(el.value);
      }
    });
  });
</script>

<template>
  <div
    ref="el"
    class="menu-item"
    role="menuitem"
    tabindex="-1"
    :class="{ 'is-disabled': disabled }"
    :aria-disabled="disabled"
  >
    <slot />
  </div>
</template>

<style scoped>
  .menu-item {
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .menu-item.is-disabled {
    color: gray;
    cursor: not-allowed;
    pointer-events: none;
  }

  .menu-item:hover,
  .menu-item:focus {
    background-color: #f3f4f6;
    outline: none;
  }
</style>
