import React from 'react';
declare namespace Spectrum {
    type TextfieldType = 'number' | 'password' | 'search';
}
declare type Props = {
    children?: React.ReactNode;
    onInput?: (e: Event) => void;
    className?: string;
    disabled?: boolean;
    invalid?: boolean;
    placeholder?: string;
    quiet?: boolean;
    type?: Spectrum.TextfieldType;
    valid?: boolean;
    value?: string;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-textarea': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                disabled?: boolean;
                invalid?: boolean;
                placeholder?: string;
                quiet?: boolean;
                type?: Spectrum.TextfieldType;
                valid?: boolean;
                value?: string;
            };
        }
    }
}
/**
 * Renders a text area with optional associated {@link Spectrum.Label}.
 * @example
 * ```jsx
 * <Spectrum.Textarea placeholder="Enter your name">
 *   <Spectrum.Label slot="label">Name</Spectrum.Label>
 * </Spectrum.Textarea>
 * ```
 */
export default function Textarea(props: Props): JSX.Element;
export {};
