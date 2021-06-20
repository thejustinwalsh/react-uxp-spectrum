import React from 'react';
declare namespace Spectrum {
    type ProgressbarVariant = 'overBackground';
}
declare type Props = {
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
export default function Progressbar(props: Props): JSX.Element;
export {};
