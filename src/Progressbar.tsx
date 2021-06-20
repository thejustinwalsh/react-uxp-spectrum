import React from 'react';

namespace Spectrum {
  export type ProgressbarVariant = 'overBackground';
}

type Props = {
  children?: React.ReactNode;
  className?: string;
  variant?: Spectrum.ProgressbarVariant;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-progressbar': {
        children?: React.ReactNode;
        class?: string;
        variant?: Spectrum.ProgressbarVariant;
      };
    }
  }
}

export default function Progressbar(props: Props) {
  return (
    <sp-progressbar class={props.className} variant={props.variant}>
      {props.children}
    </sp-progressbar>
  );
}
