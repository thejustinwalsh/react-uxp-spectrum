import React, { useEffect, useRef } from 'react';
export default function MenuItem(props) {
    const ref = useRef(null);
    const dispatchClick = (e) => props.onClick?.(e);
    useEffect(() => {
        ref.current?.addEventListener('click', dispatchClick);
        return () => {
            ref.current?.removeEventListener('click', dispatchClick);
        };
    }, []);
    return (React.createElement("sp-menu-item", { ref: ref, class: props.className, disabled: props.disabled || undefined, selected: props.selected || undefined }, props.children));
}
//# sourceMappingURL=MenuItem.js.map