<script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from './index.js'; // menu import
  import { Tooltip, TooltipTrigger, TooltipContent } from './index.js'; // tooltip import
</script>

<template>
  <h1>Menu</h1>
  <Menu>
    <MenuButton>Open Menu</MenuButton>

    <MenuItems>
      <MenuItem as="a" href="/profile">Profile</MenuItem>
      <MenuItem disabled>Settings</MenuItem>
      <MenuItem>Logout</MenuItem>
    </MenuItems>
  </Menu>

  <h1>Tooltip</h1>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Hello</TooltipContent>
  </Tooltip>
</template>

<style>
  body {
    font-family: Arial, sans-serif;
    padding: 2rem;
    background-color: #f9fafb;
  }

  .divider {
    margin-top: 20px;
    background-color: black;
    height: 2px;
    width: 100%;
  }

  .dropdown-enter-active,
  .dropdown-leave-active {
    transition:
      opacity 0.18s ease,
      transform 0.18s ease;
    transform-origin: top;
  }

  .dropdown-enter-from,
  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-6px) scale(0.98);
  }

  .dropdown-enter-to,
  .dropdown-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
</style>
