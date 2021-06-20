import React from 'react';
declare namespace Spectrum {
    type DetailScript = 'latin' | 'han' | 'arabic' | 'hebrew';
    type DetailSize = 'S' | 'M' | 'L' | 'XL';
    type DetailWeight = 'light' | 'default';
}
declare type Props = {
    children?: React.ReactNode;
    className?: string;
    script?: Spectrum.DetailScript;
    size?: Spectrum.DetailSize;
    weight?: Spectrum.DetailWeight;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-detail': {
                children?: React.ReactNode;
                class?: string;
                script?: Spectrum.DetailScript;
                size?: Spectrum.DetailSize;
                weight?: Spectrum.DetailWeight;
            };
        }
    }
}
export default function Detail(props: Props): JSX.Element;
export {};
