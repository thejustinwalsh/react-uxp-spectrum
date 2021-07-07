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
    useEffect(function () {
        var _a;
        var dispatchChange = function (e) { var _a; return (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e); };
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('change', dispatchChange);
        return function () {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('change', dispatchChange);
        };
    }, [props.onChange]);
    useEffect(function () {
        var _a;
        var dispatchInput = function (e) { var _a; return (_a = props.onInput) === null || _a === void 0 ? void 0 : _a.call(props, e); };
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('input', dispatchInput);
        return function () {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('input', dispatchInput);
        };
    }, [props.onInput]);
    return (React.createElement("sp-checkbox", { ref: ref, "class": props === null || props === void 0 ? void 0 : props.className, checked: (props === null || props === void 0 ? void 0 : props.checked) || undefined, disabled: (props === null || props === void 0 ? void 0 : props.disabled) || undefined, size: (props === null || props === void 0 ? void 0 : props.size) || undefined, indeterminate: (props === null || props === void 0 ? void 0 : props.indeterminate) || undefined, invalid: props.invalid || undefined }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=Checkbox.js.map