import React, { useEffect, useRef } from 'react';

namespace Spectrum {
  export type SliderFillOffset = 'left' | 'right';
  export type SliderVariant = 'filled';
  export interface SliderEvent extends globalThis.Event {
    readonly target: (EventTarget & { value: string }) | null;
  }
}

type Props = {
  children?: React.ReactNode;
  onChange?: (e: Spectrum.SliderEvent) => void;
  onInput?: (e: Spectrum.SliderEvent) => void;
  className?: string;
  disabled?: boolean;
  fillOffset?: Spectrum.SliderFillOffset;
  min: number;
  max: number;
  showValue?: boolean;
  value: number;
  valueLabel?: string;
  variant?: Spectrum.SliderVariant;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-slider': {
        children?: React.ReactNode;
        ref?: React.RefObject<HTMLElement>;
        class?: string;
        disabled?: boolean;
        'fill-offset'?: Spectrum.SliderFillOffset;
        min: number;
        max: number;
        'show-value'?: boolean;
        value: number;
        'value-label'?: string;
        variant?: Spectrum.SliderVariant;
      };
    }
  }
}

/**
 * Renders a slider with optional associated {@link Spectrum.Label}.
 * @example
 * ```jsx
 * <Spectrum.Slider min="0" max="100" value="50">
 *   <Spectrum.Label slot="label">Slider Label</Spectrum.Label>
 * </Spectrum.Slider>
 * ```
 */
export default function Slider(props: Props) {
  const ref = useRef<HTMLElement>(null);
  const dispatchChange = (e: Event) =>
    props.onChange?.(e as Spectrum.SliderEvent);
  const dispatchInput = (e: Event) =>
    props.onInput?.(e as Spectrum.SliderEvent);

  useEffect(() => {
    ref.current?.addEventListener('change', dispatchChange);
    ref.current?.addEventListener('input', dispatchInput);
    return () => {
      ref.current?.removeEventListener('change', dispatchChange);
      ref.current?.removeEventListener('input', dispatchInput);
    };
  }, [ref]);

  return (
    <sp-slider
      ref={ref}
      class={props.className}
      disabled={props.disabled || undefined}
      fill-offset={props.fillOffset}
      min={props.min}
      max={props.max}
      show-value={props.showValue === false ? false : undefined}
      value={props.value}
      value-label={props.valueLabel}
      variant={props.variant}
    >
      {props?.children}
    </sp-slider>
  );
}
