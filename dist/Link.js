import React, { useEffect, useRef } from 'react';
export default function Link(props) {
    const ref = useRef(null);
    const dispatchClick = (e) => props.onClick?.(e);
    useEffect(() => {
        ref.current?.addEventListener('click', dispatchClick);
        return () => {
            ref.current?.removeEventListener('click', dispatchClick);
        };
    }, []);
    return (React.createElement("sp-link", { ref: ref, class: props.className, href: props.href, quiet: props.quiet || undefined, variant: props.variant }, props.children));
}
//# sourceMappingURL=Link.js.map