import React from 'react';
/**
 * Renders heading text that is theme aware.
 *
 * @example
 * ```jsx
 * <Spectrum.Heading size="XL">Heading XL</Spectrum.Heading>
 * ```
 */
export default function Heading(props) {
    return (React.createElement("sp-heading", { "class": props === null || props === void 0 ? void 0 : props.className, classification: props === null || props === void 0 ? void 0 : props.classification, script: props === null || props === void 0 ? void 0 : props.script, size: props === null || props === void 0 ? void 0 : props.size, weight: props === null || props === void 0 ? void 0 : props.weight }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=Heading.js.map