import { inject } from 'vue';
import { DIALOG_CTX } from './context';

export function useDialogContext() {
  const dialog = inject(DIALOG_CTX);

  if (!dialog) {
    throw new Error('Dialog components must be used inside <Dialog>');
  }

  return dialog;
}
