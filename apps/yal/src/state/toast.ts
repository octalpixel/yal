import { ToastArgs, ToastType, YalToast } from '@yal-app/types';
import toast, { ToastOptions } from 'solid-toast';

const test: YalToast = {
  message: 'hello this is a really long test message',
  level: 'error' as ToastType,
  timer: null,
};

export const TOAST_TIMER = 7000;

export const setToast = (args: ToastArgs) => {
  const options: Partial<ToastOptions> = {
    duration: args.timer || TOAST_TIMER,
  };
  if (args.type === 'success') {
    toast.success(args.message, options);
  }
  if (args.type === 'error') {
    toast.error(args.message, options);
  }
  if (args.type === 'info') {
    toast(args.message, options);
  }
  if (args.type === 'loading') {
    toast.loading(args.message, options);
  }
  return toast;
};
