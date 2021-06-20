import React from 'react';
declare type Props = {
    children?: React.ReactNode;
    onChange?: (e: Event) => void;
    onInput?: (e: Event) => void;
    className?: string;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    invalid?: boolean;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-checkbox': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                checked?: boolean;
                disabled?: boolean;
                indeterminate?: boolean;
                invalid?: boolean;
            };
        }
    }
}
export default function Checkbox(props: Props): JSX.Element;
export {};
