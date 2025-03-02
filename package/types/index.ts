import { PluginActions } from './pluginActions';
import toast from 'solid-toast';

declare global {
  const yal: PluginActions & { config: { pluginsPath: string } };
  interface Window {
    yal: PluginActions & {
      config: { pluginsPath: string };
    };
  }
}

export type Icon = {
  name: string;
  type: string;
};

export type ResultLineItem<T = unknown> = {
  name?: string;
  description?: string;
  icon?: string;
  appNode?: HTMLElement;
  metadata?: T;
};

export type PluginState<T> = ResultLineItem<T> | ResultLineItem<T>[];

export type PluginResult<T = unknown> = {
  state?: PluginState<T>;
  action?: Action<T>;
  focus?: Action<T>;
  heading: string;
  appNode?: HTMLElement;
};

export type AppEntry = {
  [key: string]: {
    icon: string;
  };
};

export type YalToast = {
  message: string;
  level: ToastType;
  timer?: number;
};

export type ToastType = 'info' | 'error' | 'success' | 'loading';

export type ToastArgs = {
  message: string;
  timer?: number;
  type: ToastType;
};

export type PluginArgs = {
  system: {
    apps: AppEntry[];
  };
  pluginPath: string;
  utils: {
    setInputText: (text: string) => void;
    setToast: (args: ToastArgs) => typeof toast;
  };
  text: string;
  setState: <T>(state: PluginResult<T>) => void;
  appNode?: HTMLElement;
};

export type YalPlugin = (
  args: PluginArgs
) => void | Promise<void> | PluginResult | Promise<PluginResult>;

export type YalReactAppPlugin = (args: PluginArgs) => { appNode: HTMLElement };

type ActionArgs<T> = {
  setState: <T>(state: PluginResult<T>) => void;
  item: ResultLineItem<T>;
  searchText?: string;
  pluginActions: PluginActions;
};

export type Action<T = unknown> = (args: ActionArgs<T>) => void | Promise<void>;

export { type PluginActions };

export type YalPluginsConfig = {
  isApp?: boolean;
  keywords?: string | string[];
  filter?: boolean;
  debounce?: boolean | number;
  throttle?: boolean | number;
  keepOpen?: boolean;
};
