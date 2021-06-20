import React, { useEffect, useRef } from 'react';
export default function RadioGroup(props) {
    const ref = useRef(null);
    const dispatchChange = (e) => props.onChange?.(e);
    useEffect(() => {
        ref.current?.addEventListener('change', dispatchChange);
        return () => {
            ref.current?.removeEventListener('change', dispatchChange);
        };
    }, [ref]);
    return (React.createElement("sp-radio-group", { ref: ref, class: props?.className, column: props?.column || undefined }, props?.children));
}
//# sourceMappingURL=RadioGroup.js.map