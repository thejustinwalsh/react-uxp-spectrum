import React, { useEffect, useRef } from 'react';

namespace Spectrum {
  export type TextfieldType = 'number' | 'password' | 'search';
  export interface TextfieldEvent extends globalThis.Event {
    readonly target: (EventTarget & { value: string }) | null;
  }
}

type Props = {
  children?: React.ReactNode;
  onChange?: (e: Spectrum.TextfieldEvent) => void;
  onInput?: (e: Spectrum.TextfieldEvent) => void;
  className?: string;
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  quiet?: boolean;
  type?: Spectrum.TextfieldType;
  valid?: boolean;
  value?: string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-textfield': {
        children?: React.ReactNode;
        ref?: React.RefObject<HTMLElement>;
        class?: string;
        disabled?: boolean;
        invalid?: boolean;
        placeholder?: string;
        quiet?: boolean;
        type?: Spectrum.TextfieldType;
        valid?: boolean;
        value?: string;
      };
    }
  }
}

/**
 * Renders a text field with optional associated {@link Spectrum.Label}.
 * @example
 * ```jsx
 * <Spectrum.Textfield placeholder="Phone Number">
 *   <Spectrum.Label isRequired="true" slot="label">Phone Number</Spectrum.Label>
 * </Spectrum.Textfield>
 * ```
 */
export default function Textfield(props: Props) {
  const ref = useRef<HTMLElement>(null);
  const dispatchChange = (e: Event) =>
    props.onChange?.(e as Spectrum.TextfieldEvent);
  const dispatchInput = (e: Event) =>
    props.onInput?.(e as Spectrum.TextfieldEvent);

  useEffect(() => {
    ref.current?.addEventListener('change', dispatchChange);
    ref.current?.addEventListener('input', dispatchInput);
    return () => {
      ref.current?.removeEventListener('change', dispatchChange);
      ref.current?.removeEventListener('input', dispatchInput);
    };
  }, [ref]);

  return (
    <sp-textfield
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
    </sp-textfield>
  );
}
