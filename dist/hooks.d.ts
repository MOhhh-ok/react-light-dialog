/// <reference types="react" />
export declare function useDialogOpener(): {
  open: (component: import("react").ReactNode, options?: import(".pnpm/react-simple-dialog@file+.._@emotion+css@11.13.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-simple-dialog/dist/types").SimpleDialogOptions | undefined) => HTMLDialogElement;
};
export declare function useDialogCloser(): {
  close: () => void;
};
