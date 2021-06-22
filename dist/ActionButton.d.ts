import React from 'react';
declare namespace Spectrum {
    interface ActionButtonEvent extends globalThis.Event {
        readonly target: (EventTarget & unknown) | null;
    }
}
declare type Props = {
    children?: React.ReactNode;
    onClick?: (e: Spectrum.ActionButtonEvent) => void;
    className?: string;
    disabled?: boolean;
    quiet?: boolean;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-action-button': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                disabled?: boolean;
                quiet?: boolean;
            };
        }
    }
}
export default function ActionButton(props: Props): JSX.Element;
export {};
