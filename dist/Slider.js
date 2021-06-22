import React, { useEffect, useRef } from 'react';
/**
 * Renders a slider with optional associated {@link Spectrum.Label}.
 * @example
 * ```jsx
 * <Spectrum.Slider min="0" max="100" value="50">
 *   <Spectrum.Label slot="label">Slider Label</Spectrum.Label>
 * </Spectrum.Slider>
 * ```
 */
export default function Slider(props) {
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
    return (React.createElement("sp-slider", { ref: ref, "class": props.className, disabled: props.disabled || undefined, "fill-offset": props.fillOffset, min: props.min, max: props.max, "show-value": props.showValue === false ? false : undefined, value: props.value, "value-label": props.valueLabel, variant: props.variant }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=Slider.js.map