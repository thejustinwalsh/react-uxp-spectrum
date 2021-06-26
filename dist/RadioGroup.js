import React, { useEffect, useRef } from 'react';
/**
 * Renders a group of radio buttons horizontally or vertically (column layout), with an optional field {@link Spectrum.Label}.
 *
 * @example
 * ```jsx
 * <Spectrum.RadioGroup>
 *   <Spectrum.Label slot="label">Select a product:</Spectrum.Label>
 *   <Spectrum.Radio value="ps">Adobe Photoshop<Spectrum.Radio>
 *   <Spectrum.Radio value="xd">Adobe XD</Spectrum.Radio>
 * </Spectrum.RadioGroup>
 * ```
 */
export default function RadioGroup(props) {
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
    return (React.createElement("sp-radio-group", { ref: ref, "class": props === null || props === void 0 ? void 0 : props.className, column: (props === null || props === void 0 ? void 0 : props.column) || undefined, value: props === null || props === void 0 ? void 0 : props.value }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=RadioGroup.js.map