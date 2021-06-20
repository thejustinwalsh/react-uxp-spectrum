import React, { useEffect, useRef } from 'react';
export default function ActionButton(props) {
    const ref = useRef(null);
    const dispatchClick = (e) => props.onClick?.(e);
    useEffect(() => {
        ref.current?.addEventListener('click', dispatchClick);
        return () => {
            ref.current?.removeEventListener('click', dispatchClick);
        };
    }, [ref]);
    return (React.createElement("sp-action-button", { ref: ref, class: props?.className, disabled: props?.disabled || undefined, quiet: props?.quiet || undefined }, props?.children));
}
//# sourceMappingURL=ActionButton.js.map