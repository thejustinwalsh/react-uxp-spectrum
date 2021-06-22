import React from 'react';
/**
 * A menu divider element that separates {@link Spectrum.MenuItem}s contained
 * in a {@link Spectrum.Dropdown}.
 *
 * @example
 * <Spectrum.Dropdown>
 *   <Spectrum.Menu>
 *     <Spectrum.MenuItem>Group 1</Spectrum.MenuItem>
 *     <Spectrum.MenuDivider />
 *     <Spectrum.MenuItem>Group 2</Spectrum.MenuItem>
 *   </Spectrum.Menu>
 * </Spectrum.Dropdown>
 */
export default function MenuDivider(props) {
    return React.createElement("sp-menu-divider", { "class": props.className }, undefined);
}
//# sourceMappingURL=MenuDivider.js.map