import React, { useEffect, useRef } from 'react';

type Props = {
  children?: React.ReactNode;
  onChange?: (e: Event) => void;
  className?: string;
  column?: boolean;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-radio-group': {
        children?: React.ReactNode;
        ref?: React.RefObject<HTMLElement>;
        class?: string;
        column?: boolean;
      };
    }
  }
}

export default function RadioGroup(props: Props) {
  const ref = useRef<HTMLElement>(null);
  const dispatchChange = (e: Event) => props.onChange?.(e);

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
    >
      {props?.children}
    </sp-radio-group>
  );
}
