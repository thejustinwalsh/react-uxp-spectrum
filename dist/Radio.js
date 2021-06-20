import React, { useEffect, useRef } from 'react';
export default function Radio(props) {
    const ref = useRef(null);
    const dispatchInput = (e) => props.onInput?.(e);
    useEffect(() => {
        ref.current?.addEventListener('input', dispatchInput);
        return () => {
            ref.current?.removeEventListener('input', dispatchInput);
        };
    }, [ref]);
    return (React.createElement("sp-radio", { ref: ref, class: props?.className, checked: props?.checked || undefined, disabled: props?.disabled || undefined, emphasized: props?.emphasized || undefined, invalid: props.invalid || undefined, value: props.value }, props?.children));
}
//# sourceMappingURL=Radio.js.map