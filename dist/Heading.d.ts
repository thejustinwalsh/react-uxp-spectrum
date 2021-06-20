import React from 'react';
declare namespace Spectrum {
    type HeadingClassification = 'serif' | 'sans serif';
    type HeadingScript = 'latin' | 'han' | 'arabic' | 'hebrew';
    type HeadingSize = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
    type HeadingWeight = 'light' | 'default' | 'heavy';
}
declare type Props = {
    children?: React.ReactNode;
    className?: string;
    classification?: Spectrum.HeadingClassification;
    script?: Spectrum.HeadingScript;
    size?: Spectrum.HeadingSize;
    weight?: Spectrum.HeadingWeight;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-heading': {
                children?: React.ReactNode;
                class?: string;
                classification?: Spectrum.HeadingClassification;
                script?: Spectrum.HeadingScript;
                size?: Spectrum.HeadingSize;
                weight?: Spectrum.HeadingWeight;
            };
        }
    }
}
export default function Heading(props: Props): JSX.Element;
export {};
