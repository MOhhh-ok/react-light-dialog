
export type DialogType = 'popover' | 'modal' | 'modeless';

export type DialogOptions = {
  style?: React.CSSProperties;
  className?: string;
}

export type DialogProps<I = any, R = any> = {
  hide: HideFunction<R>;
  payload: I;
}

export type HideFunction<R = any> = (data?: R) => void;

