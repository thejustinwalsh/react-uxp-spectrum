import React, { useEffect, useRef } from 'react';
export default function Checkbox(props) {
    const ref = useRef(null);
    const dispatchChange = (e) => props.onChange?.(e);
    const dispatchInput = (e) => props.onInput?.(e);
    useEffect(() => {
        ref.current?.addEventListener('change', dispatchChange);
        ref.current?.addEventListener('input', dispatchInput);
        return () => {
            ref.current?.removeEventListener('change', dispatchChange);
            ref.current?.removeEventListener('input', dispatchInput);
        };
    }, [ref]);
    return (React.createElement("sp-checkbox", { ref: ref, class: props?.className, checked: props?.checked || undefined, disabled: props?.disabled || undefined, indeterminate: props?.indeterminate || undefined, invalid: props.invalid || undefined }, props?.children));
}
//# sourceMappingURL=Checkbox.js.map