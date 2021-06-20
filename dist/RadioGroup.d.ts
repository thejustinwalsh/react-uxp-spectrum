import React from 'react';
declare type Props = {
    children?: React.ReactNode;
    onChange?: (e: Event) => void;
    className?: string;
    column?: boolean;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-radio-group': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                column?: boolean;
            };
        }
    }
}
export default function RadioGroup(props: Props): JSX.Element;
export {};
