import React from 'react';
declare namespace Spectrum {
    type ButtonVariant = 'cta' | 'primary' | 'secondary' | 'warning' | 'overBackground';
}
declare type Props = {
    children?: React.ReactNode;
    onClick?: (e: MouseEvent) => void;
    className?: string;
    disabled?: boolean;
    quiet?: boolean;
    variant?: Spectrum.ButtonVariant;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-button': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                disabled?: boolean;
                quiet?: boolean;
                variant?: Spectrum.ButtonVariant;
            };
        }
    }
}
export default function Button(props: Props): JSX.Element;
export {};
