import React, { useEffect, useRef } from 'react';
import { SpectrumComponetDefaults } from './common';
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
    return (React.createElement("sp-menu", { ref: ref, "class": props.className, slot: props.slot === 'options' ? 'options' : undefined, selectedIndex: props.selectedIndex, size: (props === null || props === void 0 ? void 0 : props.size) || SpectrumComponetDefaults.defaultSize }, props.children));
}
//# sourceMappingURL=Menu.js.map