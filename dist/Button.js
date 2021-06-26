import React, { useEffect, useRef } from 'react';
/**
 * Renders a button.
 *
 * @example
 * ```jsx
 * <Spectrum.Button variant="primary">Click</Spectrum.Button>
 * ```
 */
export default function Button(props) {
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
    var variant = props.variant || (props.quiet === true ? 'primary' : 'cta');
    return (React.createElement("sp-button", { ref: ref, "class": props.className, disabled: props.disabled || undefined, quiet: props.quiet || undefined, variant: variant }, props.children));
}
//# sourceMappingURL=Button.js.map