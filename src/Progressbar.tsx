import React from 'react';

namespace Spectrum {
  export type ProgressbarVariant = 'overBackground';
  export type ProgressbarSize = 'small';
}

type Props = {
  children?: React.ReactNode;
  className?: string;
  min?: number;
  max: number;
  size?: Spectrum.ProgressbarSize;
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
        size?: Spectrum.ProgressbarSize;
        showValue?: boolean;
        value: number;
        valueLabel?: string;
        variant?: Spectrum.ProgressbarVariant;
      };
    }
  }
}

export default function Progressbar(props: Props) {
  return (
    <sp-progressbar
      class={props.className}
      min={props.min}
      max={props.max}
      size={props.size}
      showValue={props.showValue || undefined}
      value={props.value}
      valueLabel={props.valueLabel}
      variant={props.variant}
    >
      {props.children}
    </sp-progressbar>
  );
}
