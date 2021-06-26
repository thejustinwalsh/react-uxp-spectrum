import React, { useEffect, useRef } from 'react';
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
export default function MenuItem(props) {
    var ref = useRef(null);
    useEffect(function () {
        var _a;
        var dispatchClick = function (e) { var _a; return (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e); };
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('click', dispatchClick);
        return function () {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', dispatchClick);
        };
    }, [props.onClick]);
    return (React.createElement("sp-menu-item", { ref: ref, "class": props.className, disabled: props.disabled || undefined, selected: props.selected || undefined }, props.children));
}
//# sourceMappingURL=MenuItem.js.map