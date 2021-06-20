import React, { useEffect, useRef } from 'react';
export default function Button(props) {
    const ref = useRef(null);
    const dispatchClick = (e) => props.onClick?.(e);
    useEffect(() => {
        ref.current?.addEventListener('click', dispatchClick);
        return () => {
            ref.current?.removeEventListener('click', dispatchClick);
        };
    }, []);
    const variant = props.variant || (props.quiet === true ? 'primary' : 'cta');
    return (React.createElement("sp-button", { ref: ref, class: props.className, disabled: props.disabled || undefined, quiet: props.quiet || undefined, variant: variant }, props.children));
}
//# sourceMappingURL=Button.js.map