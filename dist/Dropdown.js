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
    var ref = useRef(null);
    useEffect(function () {
        var _a;
        var dispatchChange = function (e) { var _a; return (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e); };
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('change', dispatchChange);
        return function () {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('change', dispatchChange);
        };
    }, [props.onChange]);
    return (React.createElement("sp-dropdown", { ref: ref, "class": props.className, disabled: props.disabled || undefined, invalid: props.invalid || undefined, quiet: props.quiet || undefined, placeholder: props.placeholder, selectedIndex: props.selectedIndex }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=Dropdown.js.map