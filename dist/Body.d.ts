import React from 'react';
declare namespace Spectrum {
    type BodyClassification = 'serif' | 'sans serif';
    type BodyScript = 'latin' | 'han' | 'arabic' | 'hebrew';
    type BodySize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
}
declare type Props = {
    children?: React.ReactNode;
    className?: string;
    classification?: Spectrum.BodyClassification;
    script?: Spectrum.BodyScript;
    size?: Spectrum.BodySize;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-body': {
                children?: React.ReactNode;
                class?: string;
                classification?: Spectrum.BodyClassification;
                script?: Spectrum.BodyScript;
                size?: Spectrum.BodySize;
            };
        }
    }
}
export default function Body(props: Props): JSX.Element;
export {};
