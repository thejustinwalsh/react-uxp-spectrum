import React, { useEffect, useRef } from 'react';
/**
 * Renders a checkbox with associated label.
 *
 * @example
 * ```jsx
 * <Spectrum.Checkbox checked>Checked</Spectrum.Checkbox>
 * ```
 */
export default function Checkbox(props) {
    var ref = useRef(null);
    var dispatchChange = function (e) { var _a; return (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e); };
    var dispatchInput = function (e) { var _a; return (_a = props.onInput) === null || _a === void 0 ? void 0 : _a.call(props, e); };
    useEffect(function () {
        var _a, _b;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('change', dispatchChange);
        (_b = ref.current) === null || _b === void 0 ? void 0 : _b.addEventListener('input', dispatchInput);
        return function () {
            var _a, _b;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('change', dispatchChange);
            (_b = ref.current) === null || _b === void 0 ? void 0 : _b.removeEventListener('input', dispatchInput);
        };
    }, [ref]);
    return (React.createElement("sp-checkbox", { ref: ref, "class": props === null || props === void 0 ? void 0 : props.className, checked: (props === null || props === void 0 ? void 0 : props.checked) || undefined, disabled: (props === null || props === void 0 ? void 0 : props.disabled) || undefined, indeterminate: (props === null || props === void 0 ? void 0 : props.indeterminate) || undefined, invalid: props.invalid || undefined }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=Checkbox.js.map