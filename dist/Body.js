import React from 'react';
import { SpectrumComponetDefaults } from './common';
/**
 * Renders body text that is theme aware.
 *
 * @example
 * ```jsx
 * <Spectrum.Body size="XL">This is some body text</Spectrum.Body>
 * ```
 */
export default function Body(props) {
    return (React.createElement("sp-body", { "class": props === null || props === void 0 ? void 0 : props.className, classification: props === null || props === void 0 ? void 0 : props.classification, script: props === null || props === void 0 ? void 0 : props.script, size: (props === null || props === void 0 ? void 0 : props.size) || SpectrumComponetDefaults.defaultSize }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=Body.js.map