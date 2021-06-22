import React, { useEffect, useRef } from 'react';
/**
 * Renders a text area with optional associated {@link Spectrum.Label}.
 * @example
 * ```jsx
 * <Spectrum.Textarea placeholder="Enter your name">
 *   <Spectrum.Label slot="label">Name</Spectrum.Label>
 * </Spectrum.Textarea>
 * ```
 */
export default function Textarea(props) {
    var ref = useRef(null);
    var dispatchInput = function (e) { var _a; return (_a = props.onInput) === null || _a === void 0 ? void 0 : _a.call(props, e); };
    useEffect(function () {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('input', dispatchInput);
        return function () {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('input', dispatchInput);
        };
    }, [ref]);
    return (React.createElement("sp-textarea", { ref: ref, "class": props.className, disabled: props.disabled || undefined, invalid: props.invalid || undefined, placeholder: props.placeholder, quiet: props.quiet || undefined, type: props.type, valid: props.valid || undefined, value: props.value }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=Textarea.js.map