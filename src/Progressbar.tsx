import React from 'react';
import { SpectrumComponetDefaults } from './common';

namespace Spectrum {
  export type ProgressbarVariant = 'overBackground';
  export type ProgressbarSize = 'small';
}

type Props = {
  children?: React.ReactNode;
  className?: string;
  min?: number;
  max: number;
  size?: SpectrumComponetDefaults;
  showValue?: boolean;
  value: number;
  valueLabel?: string;
  variant?: Spectrum.ProgressbarVariant;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-progressbar': {
        children?: React.ReactNode;
        class?: string;
        min?: number;
        max: number;
        size?: SpectrumComponetDefaults;
        'show-value'?: boolean;
        value: number;
        'value-label'?: string;
        variant?: Spectrum.ProgressbarVariant;
      };
    }
  }
}

/**
 * Renders a progress bar.
 *
 * @example
 * ```jsx
 * <Spectrum.Progressbar max={100} value={50} valueLabel="593 kB">
 *   <Spectrum.Label slot="label">Uploading...</Spectrum.Label>
 * </Spectrum.Progressbar>
 * ```
 */
export default function Progressbar(props: Props) {
  return (
    <sp-progressbar
      class={props.className}
      min={props.min}
      max={props.max}
      show-value={props.showValue || undefined}
      value={props.value}
      value-label={props.valueLabel}
      variant={props.variant}
      size={props?.size || SpectrumComponetDefaults.defaultSize}
    >
      {props.children}
    </sp-progressbar>
  );
}
