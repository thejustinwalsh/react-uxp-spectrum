import React, { useEffect, useRef } from 'react';

type Props = {
  children?: React.ReactNode;
  onChange?: (e: Event) => void;
  onInput?: (e: Event) => void;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  invalid?: boolean;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-checkbox': {
        children?: React.ReactNode;
        ref?: React.RefObject<HTMLElement>;
        class?: string;
        checked?: boolean;
        disabled?: boolean;
        indeterminate?: boolean;
        invalid?: boolean;
      };
    }
  }
}

export default function Checkbox(props: Props) {
  const ref = useRef<HTMLElement>(null);
  const dispatchChange = (e: Event) => props.onChange?.(e);
  const dispatchInput = (e: Event) => props.onInput?.(e);

  useEffect(() => {
    ref.current?.addEventListener('change', dispatchChange);
    ref.current?.addEventListener('input', dispatchInput);
    return () => {
      ref.current?.removeEventListener('change', dispatchChange);
      ref.current?.removeEventListener('input', dispatchInput);
    };
  }, [ref]);

  return (
    <sp-checkbox
      ref={ref}
      class={props?.className}
      checked={props?.checked || undefined}
      disabled={props?.disabled || undefined}
      indeterminate={props?.indeterminate || undefined}
      invalid={props.invalid || undefined}
    >
      {props?.children}
    </sp-checkbox>
  );
}
