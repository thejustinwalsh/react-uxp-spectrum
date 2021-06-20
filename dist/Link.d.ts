import React from 'react';
declare namespace Spectrum {
    type LinkVariant = 'overBackground';
}
declare type Props = {
    children?: React.ReactNode;
    onClick?: (e: MouseEvent) => void;
    className?: string;
    href?: string;
    quiet?: boolean;
    variant?: Spectrum.LinkVariant;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-link': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                href?: string;
                quiet?: boolean;
                variant?: Spectrum.LinkVariant;
            };
        }
    }
}
export default function Link(props: Props): JSX.Element;
export {};
