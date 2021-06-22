import React, { useEffect, useRef } from 'react';

namespace Spectrum {
  export interface ActionButtonEvent extends globalThis.Event {
    readonly target: (EventTarget & unknown) | null;
  }
}

type Props = {
  children?: React.ReactNode;
  onClick?: (e: Spectrum.ActionButtonEvent) => void;
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
  const dispatchClick = (e: Event) =>
    props.onClick?.(e as Spectrum.ActionButtonEvent);

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
