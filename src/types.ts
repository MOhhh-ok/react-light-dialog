
export type DialogType = 'popover' | 'modal' | 'modeless';

export type DialogOptions = {
  style?: React.CSSProperties;
  className?: string;
}

export type DialogProps<T = any> = {
  hide: HideFunction<T>;
}

export type HideFunction<T = any> = (data?: T) => void;


