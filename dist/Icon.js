import React from 'react';
/**
 * Display a named icon.
 *
 * @example
 * ```jsx
 * <Spectrum.Icon size="xl" name="ui:Magnifier" />
 * ```
 */
export default function Icon(props) {
    return (React.createElement("sp-icon", { "class": props === null || props === void 0 ? void 0 : props.className, name: props.name, size: props.size, slot: props.slot }, undefined));
}
//# sourceMappingURL=Icon.js.map