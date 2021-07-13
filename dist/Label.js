import React from 'react';
import { SpectrumComponetDefaults } from './common';
/**
 * Renders a text label. Can also be used to add a label to many Spectrum UXP
 * UI elements when using the `slot="label"` attribute.
 *
 * @example
 * ```jsx
 * <Spectrum.Textfield>
 *   <Spectrum.Label slot="label" isRequired>Required label in a slot</Spectrum.Label>
 * </Spectrum.Textfield>
 * ```
 */
export default function Label(props) {
    return (React.createElement("sp-label", { "class": props === null || props === void 0 ? void 0 : props.className, slot: (props === null || props === void 0 ? void 0 : props.slot) || undefined, isrequired: (props === null || props === void 0 ? void 0 : props.isRequired) || undefined, size: (props === null || props === void 0 ? void 0 : props.size) || SpectrumComponetDefaults.defaultSize }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=Label.js.map