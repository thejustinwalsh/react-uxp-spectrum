import React from 'react';
import { SpectrumComponentSize } from './common';
declare namespace Spectrum {
    type SliderFillOffset = 'left' | 'right';
    type SliderVariant = 'filled';
    interface SliderEvent extends globalThis.Event {
        readonly target: (EventTarget & {
            value: string;
        }) | null;
    }
}
declare type Props = {
    children?: React.ReactNode;
    onChange?: (e: Spectrum.SliderEvent) => void;
    onInput?: (e: Spectrum.SliderEvent) => void;
    className?: string;
    disabled?: boolean;
    fillOffset?: Spectrum.SliderFillOffset;
    min: number;
    max: number;
    showValue?: boolean;
    value: number;
    valueLabel?: string;
    variant?: Spectrum.SliderVariant;
    size?: SpectrumComponentSize;
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
                size?: SpectrumComponentSize;
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
