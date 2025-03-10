import { ReactNode } from 'react';

export type DialogType = 'popover' | 'modal' | 'non-modal';

export type DialogOptions = {
  type?: DialogType;
  style?: React.CSSProperties;
  className?: string;
}

export type DialogProps<T = any> = {
  hide: HideFunction<T>;
}

export type ShowFunction<T> = (
  component: ReactNode | ((params: DialogProps<T>) => ReactNode),
  options?: DialogOptions
) => Promise<T>;

export type HideFunction<T = any> = (data: T) => T;
