import React, { useEffect, useRef } from 'react';
/**
 * Renders a text field with optional associated {@link Spectrum.Label}.
 * @example
 * ```jsx
 * <Spectrum.Textfield placeholder="Phone Number">
 *   <Spectrum.Label isrequired="true" slot="label">Phone Number</Spectrum.Label>
 * </Spectrum.Textfield>
 * ```
 */
export default function Textfield(props) {
    const ref = useRef(null);
    const dispatchInput = (e) => props.onInput?.(e);
    useEffect(() => {
        ref.current?.addEventListener('input', dispatchInput);
        return () => {
            ref.current?.removeEventListener('input', dispatchInput);
        };
    }, [ref]);
    return (React.createElement("sp-textfield", { ref: ref, class: props.className, disabled: props.disabled || undefined, invalid: props.invalid || undefined, placeholder: props.placeholder, quiet: props.quiet || undefined, type: props.type, valid: props.valid || undefined, value: props.value }, props?.children));
}
//# sourceMappingURL=Textfield.js.map