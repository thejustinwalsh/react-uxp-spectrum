import React from 'react';
declare type Props = {
    children?: React.ReactNode;
    onClick?: (e: MouseEvent) => void;
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
