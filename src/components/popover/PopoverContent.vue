<script setup>
  import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
  import { usePopoverContext } from './usePopoverContext';

  const { isOpen, contentRef, triggerRef, placement, close } = usePopoverContext();
  const el = ref(null);

  const placementClasses = {
    top: 'popover--top',
    bottom: 'popover--bottom',
    left: 'popover--left',
    right: 'popover--right',
    center: 'popover--center',
  };

  const placementClass = placementClasses[placement] || placementClasses.center;

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      close();
    }
  }

  function handleClickOutside(event) {
    console.log('trigger', triggerRef.value);

    if (
      contentRef.value &&
      !contentRef.value.contains(event.target) &&
      triggerRef.value &&
      !triggerRef.value.contains(event.target)
    ) {
      close();
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('mousedown', handleClickOutside);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('mousedown', handleClickOutside);
  });

  watch(el, (value) => {
    contentRef.value = value;
  });
</script>

<template>
  <Transition name="popover">
    <div v-if="isOpen" ref="el" role="popover" :class="['popover', placementClass]" tabindex="-1">
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
  .popover {
    position: absolute;
    z-index: 1000;
    background-color: #2c2929;
    border-radius: 6px;
    padding: 1rem;
    color: white;
    min-width: 100px;
  }

  .popover-enter-from {
    opacity: 0;
    transform: scale(0.5);
  }

  .popover--center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .popover--top {
    bottom: calc(100% + 5px);
    left: 50%;
    transform: translateX(-50%);
  }

  .popover--bottom {
    top: calc(100% + + 5px);
    left: 50%;
    transform: translateX(-50%);
  }

  .popover--left {
    right: calc(100% + 5px);
    top: 50%;
    transform: translateY(-50%);
  }

  .popover--right {
    left: calc(100% + 5px);
    top: 50%;
    transform: translateY(-50%);
  }
</style>
