import React from 'react';
declare type Props = {
    children?: React.ReactNode;
    onInput?: (e: Event) => void;
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
export default function Radio(props: Props): JSX.Element;
export {};
