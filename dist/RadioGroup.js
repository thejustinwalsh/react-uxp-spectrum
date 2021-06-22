import React, { useEffect, useRef } from 'react';
export default function RadioGroup(props) {
    var ref = useRef(null);
    var dispatchChange = function (e) { var _a; return (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e); };
    useEffect(function () {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('change', dispatchChange);
        return function () {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('change', dispatchChange);
        };
    }, [ref]);
    return (React.createElement("sp-radio-group", { ref: ref, "class": props === null || props === void 0 ? void 0 : props.className, column: (props === null || props === void 0 ? void 0 : props.column) || undefined, value: props === null || props === void 0 ? void 0 : props.value }, props === null || props === void 0 ? void 0 : props.children));
}
//# sourceMappingURL=RadioGroup.js.map