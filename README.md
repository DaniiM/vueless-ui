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

### Tooltip

- Headless tooltip component
- Configurable placement (top, bottom, left, right)
- Disabled support
- Optional touch behavior for mobile
- Animations (fade & scale)
- as / asChild support for custom triggers

## Usage Example

```vue
<template>
  <Menu>
    <MenuButton>Open Menu</MenuButton>
    <MenuItems>
      <MenuItem>Profile</MenuItem>
      <MenuItem disabled>Settings</MenuItem>
      <MenuItem>Logout</MenuItem>
    </MenuItems>
  </Menu>
</template>
```

```vue
<template>
  <Tooltip placement="top">
    <TooltipTrigger as="button">Hover me</TooltipTrigger>
    <TooltipContent>Hello!</TooltipContent>
  </Tooltip>

  <Tooltip placement="right">
    <TooltipTrigger as="span">Hover me too</TooltipTrigger>
    <TooltipContent>Right-side tooltip</TooltipContent>
  </Tooltip>
</template>
```

## Contributing

- Found a bug or have a feature idea? Open an **issue**.
- Pull Requests (PRs) are welcome! Please follow the existing component patterns.
- All PRs will be **reviewed** before merging.
