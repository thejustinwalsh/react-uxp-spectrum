import React, { useEffect, useRef } from 'react';
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
export default function Menu(props) {
    const ref = useRef(null);
    const dispatchChange = (e) => props.onChange?.(e);
    useEffect(() => {
        ref.current?.addEventListener('change', dispatchChange);
        return () => {
            ref.current?.removeEventListener('change', dispatchChange);
        };
    }, [ref]);
    return (React.createElement("sp-menu", { ref: ref, class: props.className, slot: props.slot === 'options' ? 'options' : undefined }, props.children));
}
//# sourceMappingURL=Menu.js.map