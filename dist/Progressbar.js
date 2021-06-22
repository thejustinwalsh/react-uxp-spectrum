import React from 'react';
/**
 * Renders a progress bar.
 *
 * @example
 * ```jsx
 * <Spectrum.Progressbar max={100} value={50} valueLabel="593 kB">
 *   <Spectrum.Label slot="label">Uploading...</Spectrum.Label>
 * </Spectrum.Progressbar>
 * ```
 */
export default function Progressbar(props) {
    return (React.createElement("sp-progressbar", { "class": props.className, min: props.min, max: props.max, size: props.size, "show-value": props.showValue || undefined, value: props.value, "value-label": props.valueLabel, variant: props.variant }, props.children));
}
//# sourceMappingURL=Progressbar.js.map