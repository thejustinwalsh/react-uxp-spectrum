import React, { useEffect, useRef } from 'react';
/**
 * Renders a text area with optional associated {@link Spectrum.Label}.
 * @example
 * ```jsx
 * <Spectrum.Textarea placeholder="Enter your name">
 *   <Spectrum.Label slot="label">Name</Spectrum.Label>
 * </Spectrum.Textarea>
 * ```
 */
export default function Textarea(props) {
    const ref = useRef(null);
    const dispatchInput = (e) => props.onInput?.(e);
    useEffect(() => {
        ref.current?.addEventListener('input', dispatchInput);
        return () => {
            ref.current?.removeEventListener('input', dispatchInput);
        };
    }, [ref]);
    return (React.createElement("sp-textarea", { ref: ref, class: props.className, disabled: props.disabled || undefined, invalid: props.invalid || undefined, placeholder: props.placeholder, quiet: props.quiet || undefined, type: props.type, valid: props.valid || undefined, value: props.value }, props?.children));
}
//# sourceMappingURL=Textarea.js.map