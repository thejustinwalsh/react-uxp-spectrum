import React, { useEffect, useRef } from 'react';

namespace Spectrum {
  export type TextfieldType = 'number' | 'password' | 'search';
}

type Props = {
  children?: React.ReactNode;
  onInput?: (e: Event) => void;
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
 *   <Spectrum.Label isrequired="true" slot="label">Phone Number</Spectrum.Label>
 * </Spectrum.Textfield>
 * ```
 */
export default function Textfield(props: Props) {
  const ref = useRef<HTMLElement>(null);
  const dispatchInput = (e: Event) => props.onInput?.(e);

  useEffect(() => {
    ref.current?.addEventListener('input', dispatchInput);
    return () => {
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
