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
    const ref = useRef(null);
    const dispatchInput = (e) => props.onInput?.(e);
    useEffect(() => {
        ref.current?.addEventListener('input', dispatchInput);
        return () => {
            ref.current?.removeEventListener('input', dispatchInput);
        };
    }, [ref]);
    return (React.createElement("sp-slider", { ref: ref, class: props.className, disabled: props.disabled || undefined, "fill-offset": props.fillOffset, min: props.min, max: props.max, "show-value": props.showValue === false ? false : undefined, value: props.value, "value-label": props.valueLabel, variant: props.variant }, props?.children));
}
//# sourceMappingURL=Slider.js.map