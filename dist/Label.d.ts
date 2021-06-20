import React from 'react';
declare namespace Spectrum {
    type LabelSlot = 'label';
}
declare type Props = {
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
                isRequired?: boolean;
            };
        }
    }
}
export default function Label(props: Props): JSX.Element;
export {};
