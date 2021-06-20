import React, { useEffect, useRef } from 'react';

type Props = {
  children?: React.ReactNode;
  onClick?: (e: MouseEvent) => void;
  className?: string;
  disabled?: boolean;
  quiet?: boolean;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-action-button': {
        children?: React.ReactNode;
        ref?: React.RefObject<HTMLElement>;
        class?: string;
        disabled?: boolean;
        quiet?: boolean;
      };
    }
  }
}

export default function ActionButton(props: Props) {
  const ref = useRef<HTMLElement>(null);
  const dispatchClick = (e: MouseEvent) => props.onClick?.(e);

  useEffect(() => {
    ref.current?.addEventListener('click', dispatchClick);
    return () => {
      ref.current?.removeEventListener('click', dispatchClick);
    };
  }, [ref]);

  return (
    <sp-action-button
      ref={ref}
      class={props?.className}
      disabled={props?.disabled || undefined}
      quiet={props?.quiet || undefined}
    >
      {props?.children}
    </sp-action-button>
  );
}
