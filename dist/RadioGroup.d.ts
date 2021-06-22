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
export default function RadioGroup(props: Props): JSX.Element;
export {};
