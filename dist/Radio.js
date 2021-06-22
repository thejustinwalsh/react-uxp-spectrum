import React, { useEffect, useRef } from 'react';
/**
 * Renders a radio button with associated label.
 *
 * @example
 * ```jsx
 * <Spectrum.Radio checked value="ps">Adobe Photoshop</Spectrum.Radio>
 * ```
 */
export default function Radio(props) {
    var ref = useRef(null);
    var dispatchInput = function (e) { var _a; return (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e); };
    useEffect(function () {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('input', dispatchInput);
        return function () {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('input', dispatchInput);
        };
    }, [ref]);
    return (React.createElement("sp-radio", { ref: ref, "class": props === null || props === void 0 ? void 0 : props.className, checked: (props === null || props === void 0 ? void 0 : props.checked) || undefined, disabled: (props === null || props === void 0 ? void 0 : props.disabled) || undefined, emphasized: (props === null || props === void 0 ? void 0 : props.emphasized) || undefined, invalid: props.invalid || undefined, value: props.value }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=Radio.js.map