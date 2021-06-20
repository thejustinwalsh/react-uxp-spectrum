import React from 'react';
declare type Props = {
    children?: React.ReactNode;
    onClick?: (e: MouseEvent) => void;
    className?: string;
    disabled?: boolean;
    selected?: boolean;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-menu-item': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                disabled?: boolean;
                selected?: boolean;
            };
        }
    }
}
export default function MenuItem(props: Props): JSX.Element;
export {};
