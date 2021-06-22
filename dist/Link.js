import React, { useEffect, useRef } from 'react';
/**
 * Renders a link, that when clicked can launch a webpage in the user's default browser.
 *
 * @example
 * ```jsx
 * <Spectrum.Link href="https://thejustinwalsh.com">TJW</Spectrum.Link>
 * ```
 */
export default function Link(props) {
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
    return (React.createElement("sp-link", { ref: ref, "class": props.className, href: props.href, quiet: props.quiet || undefined, variant: props.variant }, props.children));
}
//# sourceMappingURL=Link.js.map