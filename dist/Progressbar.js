import React from 'react';
export default function Progressbar(props) {
    return (React.createElement("sp-progressbar", { class: props.className, min: props.min, max: props.max, size: props.size, showValue: props.showValue || undefined, value: props.value, valueLabel: props.valueLabel, variant: props.variant }, props.children));
}
//# sourceMappingURL=Progressbar.js.map