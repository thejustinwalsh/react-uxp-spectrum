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
/**
 * Renders a link, that when clicked can launch a webpage in the user's default browser.
 *
 * @example
 * ```jsx
 * <Spectrum.Link href="https://thejustinwalsh.com">TJW</Spectrum.Link>
 * ```
 */
export default function Link(props: Props): JSX.Element;
export {};
