import React from 'react';
declare namespace Spectrum {
    type TextareaType = 'number' | 'password' | 'search';
    interface TextareaEvent extends globalThis.Event {
        readonly target: (EventTarget & {
            value: string;
        }) | null;
    }
}
declare type Props = {
    children?: React.ReactNode;
    onChange?: (e: Spectrum.TextareaEvent) => void;
    onInput?: (e: Spectrum.TextareaEvent) => void;
    className?: string;
    disabled?: boolean;
    invalid?: boolean;
    placeholder?: string;
    quiet?: boolean;
    type?: Spectrum.TextareaType;
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
                type?: Spectrum.TextareaType;
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
