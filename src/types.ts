import React from 'react';

export type LightDialogOptions = {
  type?: 'popover' | 'modal' | 'non-modal';
  style?: React.CSSProperties;
}


export type OpenFunction<T> = (component: React.ReactNode, options?: LightDialogOptions) => Promise<T>;
export type CloseFunction<T> = (data: T) => T;
