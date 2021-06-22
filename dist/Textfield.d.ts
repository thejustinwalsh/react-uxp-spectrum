import React from 'react';
declare namespace Spectrum {
    type TextfieldType = 'number' | 'password' | 'search';
    interface TextfieldEvent extends globalThis.Event {
        readonly target: (EventTarget & {
            value: string;
        }) | null;
    }
}
declare type Props = {
    children?: React.ReactNode;
    onChange?: (e: Spectrum.TextfieldEvent) => void;
    onInput?: (e: Spectrum.TextfieldEvent) => void;
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
            'sp-textfield': {
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
 * Renders a text field with optional associated {@link Spectrum.Label}.
 * @example
 * ```jsx
 * <Spectrum.Textfield placeholder="Phone Number">
 *   <Spectrum.Label isrequired="true" slot="label">Phone Number</Spectrum.Label>
 * </Spectrum.Textfield>
 * ```
 */
export default function Textfield(props: Props): JSX.Element;
export {};
