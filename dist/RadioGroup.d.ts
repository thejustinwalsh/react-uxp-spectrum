import React from 'react';
declare namespace Spectrum {
    interface RadioGroupEvent extends globalThis.Event {
        readonly target: (EventTarget & {
            value: string;
        }) | null;
    }
}
declare type Props = {
    children?: React.ReactNode;
    onChange?: (e: Spectrum.RadioGroupEvent) => void;
    className?: string;
    column?: boolean;
    value?: string;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-radio-group': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                column?: boolean;
                value?: string;
            };
        }
    }
}
/**
 * Renders a group of radio buttons horizontally or vertically (column layout), with an optional field {@link Spectrum.Label}.
 *
 * @example
 * ```jsx
 * <Spectrum.RadioGroup>
 *   <Spectrum.Label slot="label">Select a product:</Spectrum.Label>
 *   <Spectrum.Radio value="ps">Adobe Photoshop<Spectrum.Radio>
 *   <Spectrum.Radio value="xd">Adobe XD</Spectrum.Radio>
 * </Spectrum.RadioGroup>
 * ```
 */
export default function RadioGroup(props: Props): JSX.Element;
export {};
