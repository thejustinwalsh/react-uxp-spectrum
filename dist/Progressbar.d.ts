import React from 'react';
declare namespace Spectrum {
    type ProgressbarVariant = 'overBackground';
    type ProgressbarSize = 'small';
}
declare type Props = {
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
                'show-value'?: boolean;
                value: number;
                'value-label'?: string;
                variant?: Spectrum.ProgressbarVariant;
            };
        }
    }
}
export default function Progressbar(props: Props): JSX.Element;
export {};
