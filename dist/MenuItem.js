import React, { useEffect, useRef } from 'react';
export default function MenuItem(props) {
    var ref = useRef(null);
    var dispatchClick = function (e) { var _a; return (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e); };
    useEffect(function () {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('click', dispatchClick);
        return function () {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', dispatchClick);
        };
    }, []);
    return (React.createElement("sp-menu-item", { ref: ref, "class": props.className, disabled: props.disabled || undefined, selected: props.selected || undefined }, props.children));
}
//# sourceMappingURL=MenuItem.js.map