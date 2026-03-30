import { inject } from 'vue';
import { TOOLTIP_CTX } from './context';

export function useTooltipContext() {
  const tooltip = inject(TOOLTIP_CTX);

  if (!tooltip) {
    throw new Error('Tooltip components must be used inside <Tooltip>');
  }

  return tooltip;
}
