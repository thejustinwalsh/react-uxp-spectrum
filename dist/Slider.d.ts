import React from 'react';
declare namespace Spectrum {
    type SliderFillOffset = 'left' | 'right';
    type SliderVariant = 'filled';
}
declare type Props = {
    children?: React.ReactNode;
    onInput?: (e: Event) => void;
    className?: string;
    disabled?: boolean;
    fillOffset?: Spectrum.SliderFillOffset;
    min: number;
    max: number;
    showValue?: boolean;
    value: number;
    valueLabel?: string;
    variant?: Spectrum.SliderVariant;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-slider': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                disabled?: boolean;
                'fill-offset'?: Spectrum.SliderFillOffset;
                min: number;
                max: number;
                'show-value'?: boolean;
                value: number;
                'value-label'?: string;
                variant?: Spectrum.SliderVariant;
            };
        }
    }
}
/**
 * Renders a slider with optional associated {@link Spectrum.Label}.
 * @example
 * ```jsx
 * <Spectrum.Slider min="0" max="100" value="50">
 *   <Spectrum.Label slot="label">Slider Label</Spectrum.Label>
 * </Spectrum.Slider>
 * ```
 */
export default function Slider(props: Props): JSX.Element;
export {};
