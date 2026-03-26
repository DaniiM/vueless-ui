# Vueless UI

Composable, unstyled UI primitives for Vue 3 with a focus on **accessibility**, **headless design**, and **developer experience**.

---

## Installation

Clone this repo and import components locally:

```bash
git clone https://github.com/DaniiM/vueless-ui.git
cd vueless-ui
npm install
npm run dev

```
## Current Components

### Menu
- Headless dropdown menu
- Keyboard accessible
- Slot-based API
- Supports disabled items

## Usage Example

<Menu>
  <MenuButton>Open Menu</MenuButton>
  <MenuItems>
    <MenuItem>Profile</MenuItem>
    <MenuItem disabled>Settings</MenuItem>
    <MenuItem>Logout</MenuItem>
  </MenuItems>
</Menu>

## Component Structure

src/
  components/
    menu/
      Menu.vue
      MenuButton.vue
      MenuItem.vue
      MenuItems.vue
      context.js
      useMenuContext.js
    popover/
    tooltip/
    dialog/
  utils/