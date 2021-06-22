import React from 'react';

namespace Spectrum {
  export type LabelSlot = 'label';
}

type Props = {
  children?: React.ReactNode;
  className?: string;
  slot?: Spectrum.LabelSlot;
  isRequired?: boolean;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-label': {
        children?: React.ReactNode;
        class?: string;
        slot?: Spectrum.LabelSlot;
        isrequired?: boolean;
      };
    }
  }
}

export default function Label(props: Props) {
  return (
    <sp-label
      class={props?.className}
      slot={props?.slot || undefined}
      isrequired={props?.isRequired || undefined}
    >
      {props?.children}
    </sp-label>
  );
}
