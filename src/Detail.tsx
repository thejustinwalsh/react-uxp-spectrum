import React from 'react';
import { SpectrumComponentSize, SpectrumComponetDefaults } from './common';

namespace Spectrum {
  export type DetailScript = 'latin' | 'han' | 'arabic' | 'hebrew';
  export type DetailWeight = 'light' | 'default';
}

type Props = {
  children?: React.ReactNode;
  className?: string;
  script?: Spectrum.DetailScript;
  size?: SpectrumComponentSize;
  weight?: Spectrum.DetailWeight;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-detail': {
        children?: React.ReactNode;
        class?: string;
        script?: Spectrum.DetailScript;
        size?: SpectrumComponentSize;
        weight?: Spectrum.DetailWeight;
      };
    }
  }
}

/**
 * Renders detail text in a smaller font.
 *
 * @example
 * ```jsx
 * <Spectrum.Detail>The fine details<Spectrum.Detail>
 * ```
 */
export default function Detail(props: Props) {
  return (
    <sp-detail
      class={props?.className}
      script={props?.script}
      size={props?.size || SpectrumComponetDefaults.defaultSize}
      weight={props?.weight}
    >
      {props?.children}
    </sp-detail>
  );
}
