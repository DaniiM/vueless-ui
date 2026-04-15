import { inject } from 'vue';
import { POPOVER_CTX } from './context';

export function usePopoverContext() {
  const popover = inject(POPOVER_CTX);

  if (!popover) {
    throw new Error('Popover components must be used inside <Popover>');
  }

  return popover;
}
