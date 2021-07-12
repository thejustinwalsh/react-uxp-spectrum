import React from 'react';
import { SpectrumComponentSize } from './common';
declare namespace Spectrum {
    interface MenuItemEvent extends globalThis.Event {
        readonly target: (EventTarget & {
            selected: boolean;
        }) | null;
    }
}
declare type Props = {
    children?: React.ReactNode;
    onClick?: (e: Spectrum.MenuItemEvent) => void;
    className?: string;
    disabled?: boolean;
    key?: string;
    value?: string;
    selected?: boolean;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-menu-item': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                key?: string;
                class?: string;
                disabled?: boolean;
                selected?: boolean;
                value?: string;
                size?: SpectrumComponentSize;
            };
        }
    }
}
/**
 * Renders a menu item, with an optional checkmark indicating selection.
 *
 * @example
 * ```jsx
 * <Spectrum.Menu>
 *   <Spectrum.MenuItem disabled>California</Spectrum.MenuItem>
 *   <Spectrum.MenuItem>Phoenix</Spectrum.MenuItem>
 *   <Spectrum.MenuItem selected>Portland</Spectrum.MenuItem>
 * </Spectrum.Menu>
 * ```
 */
export default function MenuItem(props: Props): JSX.Element;
export {};
