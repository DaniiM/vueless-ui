<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from './index.js'
</script>

<template>
  <Menu v-slot="{ isOpen, toggle, registerItem }">
    <MenuButton :toggle="toggle">Open Menu</MenuButton>

    <MenuItems :isOpen="isOpen">
      <MenuItem :register-item="registerItem">Profile</MenuItem>
      <MenuItem :register-item="registerItem">Settings</MenuItem>
      <MenuItem :register-item="registerItem">Logout</MenuItem>
    </MenuItems>
  </Menu>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  padding: 2rem;
  background-color: #f9fafb;
}
</style>