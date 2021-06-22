import React from 'react';
export default function Progressbar(props) {
    return (React.createElement("sp-progressbar", { "class": props.className, min: props.min, max: props.max, size: props.size, "show-value": props.showValue || undefined, value: props.value, "value-label": props.valueLabel, variant: props.variant }, props.children));
}
//# sourceMappingURL=Progressbar.js.map