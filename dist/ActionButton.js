import React, { useEffect, useRef } from 'react';
/**
 * Renders an action button.
 *
 * @example
 * ```jsx
 * <Spectrum.ActionButton>
 *   <Spectrum.Icon name="ui:Magnifier" size="xs" slot="icon" />
 *   Zoom
 * </Spectrum.ActionButton>
 * ```
 */
export default function ActionButton(props) {
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
    return (React.createElement("sp-action-button", { ref: ref, "class": props === null || props === void 0 ? void 0 : props.className, disabled: (props === null || props === void 0 ? void 0 : props.disabled) || undefined, quiet: (props === null || props === void 0 ? void 0 : props.quiet) || undefined }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=ActionButton.js.map