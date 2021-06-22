import React from 'react';
declare namespace Spectrum {
    interface RadioEvent extends globalThis.Event {
        readonly target: (EventTarget & {
            value: string;
        }) | null;
    }
}
declare type Props = {
    children?: React.ReactNode;
    onClick?: (e: Spectrum.RadioEvent) => void;
    className?: string;
    checked?: boolean;
    disabled?: boolean;
    emphasized?: boolean;
    invalid?: boolean;
    value?: string;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-radio': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                checked?: boolean;
                disabled?: boolean;
                emphasized?: boolean;
                invalid?: boolean;
                value?: string;
            };
        }
    }
}
/**
 * Renders a radio button with associated label.
 *
 * @example
 * ```jsx
 * <Spectrum.Radio checked value="ps">Adobe Photoshop</Spectrum.Radio>
 * ```
 */
export default function Radio(props: Props): JSX.Element;
export {};
