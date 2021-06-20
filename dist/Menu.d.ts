import React from 'react';
declare namespace Spectrum {
    type MenuSlot = 'options';
}
declare type Props = {
    children?: React.ReactNode;
    onChange?: (e: Event) => void;
    className?: string;
    slot?: Spectrum.MenuSlot;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-menu': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                slot?: Spectrum.MenuSlot;
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
