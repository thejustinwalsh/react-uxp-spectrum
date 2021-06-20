import React, { useEffect, useRef } from 'react';
/**
 * Renders a dropdown with menu items. The dropdown must contain a {@link Spectrum.Menu}
 * with `slot="options"`, and inside the {@link Spectrum.Menu}, a series of {@link Spectrum.MenuItem}
 * or {@link Spectrum.MenuDivider} elements.
 *
 * @example
 * ```jsx
 * <Spectrum.Dropdown>
 *   <Spectrum.Menu slot="options">
 *     <Spectrum.MenuItem>Deselect</Spectrum.MenuItem>
 *     <Spectrum.MenuDivider></Spectrum.MenuDivider>
 *     <Spectrum.MenuItem disabled>Make work path</Spectrum.MenuItem>
 *   </Spectrum.Menu>
 * </Spectrum.Dropdown>
 * ```
 */
export default function Dropdown(props) {
    const ref = useRef(null);
    const dispatchChange = (e) => props.onChange?.(e);
    useEffect(() => {
        ref.current?.addEventListener('change', dispatchChange);
        return () => {
            ref.current?.removeEventListener('change', dispatchChange);
        };
    }, [ref]);
    return (React.createElement("sp-dropdown", { ref: ref, class: props.className, disabled: props.disabled || undefined, invalid: props.invalid || undefined, quiet: props.quiet || undefined, placeholder: props.placeholder }, props?.children));
}
//# sourceMappingURL=Dropdown.js.map