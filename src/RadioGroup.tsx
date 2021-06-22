import React, { useEffect, useRef } from 'react';

namespace Spectrum {
  export interface RadioGroupEvent extends globalThis.Event {
    readonly target: (EventTarget & { value: string }) | null;
  }
}

type Props = {
  children?: React.ReactNode;
  onChange?: (e: Spectrum.RadioGroupEvent) => void;
  className?: string;
  column?: boolean;
  value?: string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-radio-group': {
        children?: React.ReactNode;
        ref?: React.RefObject<HTMLElement>;
        class?: string;
        column?: boolean;
        value?: string;
      };
    }
  }
}

export default function RadioGroup(props: Props) {
  const ref = useRef<HTMLElement>(null);
  const dispatchChange = (e: Event) =>
    props.onChange?.(e as Spectrum.RadioGroupEvent);

  useEffect(() => {
    ref.current?.addEventListener('change', dispatchChange);
    return () => {
      ref.current?.removeEventListener('change', dispatchChange);
    };
  }, [ref]);

  return (
    <sp-radio-group
      ref={ref}
      class={props?.className}
      column={props?.column || undefined}
      value={props?.value}
    >
      {props?.children}
    </sp-radio-group>
  );
}
