import React, { useEffect, useRef } from 'react';
/**
 * Renders a text field with optional associated {@link Spectrum.Label}.
 * @example
 * ```jsx
 * <Spectrum.Textfield placeholder="Phone Number">
 *   <Spectrum.Label isrequired="true" slot="label">Phone Number</Spectrum.Label>
 * </Spectrum.Textfield>
 * ```
 */
export default function Textfield(props) {
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
    return (React.createElement("sp-textfield", { ref: ref, "class": props.className, disabled: props.disabled || undefined, invalid: props.invalid || undefined, placeholder: props.placeholder, quiet: props.quiet || undefined, type: props.type, valid: props.valid || undefined, value: props.value }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=Textfield.js.map