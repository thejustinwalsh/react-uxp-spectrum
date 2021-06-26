import React, { useEffect, useRef } from 'react';

namespace Spectrum {
  export type TextareaType = 'number' | 'password' | 'search';
  export interface TextareaEvent extends globalThis.Event {
    readonly target: (EventTarget & { value: string }) | null;
  }
}

type Props = {
  children?: React.ReactNode;
  onChange?: (e: Spectrum.TextareaEvent) => void;
  onInput?: (e: Spectrum.TextareaEvent) => void;
  className?: string;
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  quiet?: boolean;
  type?: Spectrum.TextareaType;
  valid?: boolean;
  value?: string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-textarea': {
        children?: React.ReactNode;
        ref?: React.RefObject<HTMLElement>;
        class?: string;
        disabled?: boolean;
        invalid?: boolean;
        placeholder?: string;
        quiet?: boolean;
        type?: Spectrum.TextareaType;
        valid?: boolean;
        value?: string;
      };
    }
  }
}

/**
 * Renders a text area with optional associated {@link Spectrum.Label}.
 * @example
 * ```jsx
 * <Spectrum.Textarea placeholder="Enter your name">
 *   <Spectrum.Label slot="label">Name</Spectrum.Label>
 * </Spectrum.Textarea>
 * ```
 */
export default function Textarea(props: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const dispatchChange = (e: Event) =>
      props.onChange?.(e as Spectrum.TextareaEvent);

    ref.current?.addEventListener('change', dispatchChange);
    return () => {
      ref.current?.removeEventListener('change', dispatchChange);
    };
  }, [props.onChange]);

  useEffect(() => {
    const dispatchInput = (e: Event) =>
      props.onInput?.(e as Spectrum.TextareaEvent);

    ref.current?.addEventListener('input', dispatchInput);
    return () => {
      ref.current?.removeEventListener('input', dispatchInput);
    };
  }, [props.onInput]);

  return (
    <sp-textarea
      ref={ref}
      class={props.className}
      disabled={props.disabled || undefined}
      invalid={props.invalid || undefined}
      placeholder={props.placeholder}
      quiet={props.quiet || undefined}
      type={props.type}
      valid={props.valid || undefined}
      value={props.value}
    >
      {props?.children}
    </sp-textarea>
  );
}
