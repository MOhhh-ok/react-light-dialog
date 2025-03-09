import { ReactNode } from 'react';

export type DialogType = 'popover' | 'modal' | 'non-modal';

export type DialogOptions = {
  type?: DialogType;
  style?: React.CSSProperties;
  className?: string;
}

export type DialogProps<T = void> = {
  hide: HideFunction<T>;
}

export type ShowFunction<T> = (
  component: ReactNode | ((params: DialogProps<T>) => ReactNode),
  options?: DialogOptions
) => Promise<T>;

export type HideFunction<T> = (data: T) => T;
