import React from 'react';
import { SpectrumComponentSize } from './common';
declare namespace Spectrum {
    type MenuSlot = 'options';
    interface MenuEvent extends globalThis.Event {
        readonly target: (EventTarget & {
            selectedIndex: number;
        }) | null;
    }
}
declare type Props = {
    children?: React.ReactNode;
    onChange?: (e: Spectrum.MenuEvent) => void;
    className?: string;
    slot?: Spectrum.MenuSlot;
    selectedIndex?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-menu': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                onClick?: (e?: React.ChangeEvent<HTMLSelectElement>) => void;
                slot?: Spectrum.MenuSlot;
                selectedIndex?: number;
                size?: SpectrumComponentSize;
            };
        }
    }
}
/**
 * Renders a menu with menu items. Inside the {@link Spectrum.Menu}, a series of
 * {@link Spectrum.MenuItem} or {@link Spectrum.MenuDivider} elements may exist.
 *
 * @remarks {@link Spectrum.MenuDivider} elements will only render inside an {@link Spectrum.Dropdown}.
 *
 * @example
 * ```jsx
 * <Spectrum.Menu>
 *   <Spectrum.MenuItem>Deselect</Spectrum.MenuItem>
 *   <Spectrum.MenuItem>Select inverse</Spectrum.MenuItem>
 *   <Spectrum.MenuDivider></Spectrum.MenuDivider>
 *   <Spectrum.MenuItem disabled>Make work path</Spectrum.MenuItem>
 * </Spectrum.Menu>
 * ```
 */
export default function Menu(props: Props): JSX.Element;
export {};
