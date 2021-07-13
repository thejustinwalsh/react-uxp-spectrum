import React, { useEffect, useRef } from 'react';
import { SpectrumComponetDefaults } from './common';
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
    useEffect(function () {
        var _a;
        var dispatchInput = function (e) { var _a; return (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e); };
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('input', dispatchInput);
        return function () {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('input', dispatchInput);
        };
    }, [props.onClick]);
    return (React.createElement("sp-radio", { ref: ref, "class": props === null || props === void 0 ? void 0 : props.className, checked: (props === null || props === void 0 ? void 0 : props.checked) || undefined, disabled: (props === null || props === void 0 ? void 0 : props.disabled) || undefined, emphasized: (props === null || props === void 0 ? void 0 : props.emphasized) || undefined, invalid: props.invalid || undefined, value: props.value, size: (props === null || props === void 0 ? void 0 : props.size) || SpectrumComponetDefaults.defaultSize }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=Radio.js.map