/// <reference types="react" />
declare namespace Spectrum {
    type DividerSize = 'small' | 'medium' | 'large';
}
declare type Props = {
    className?: string;
    size?: Spectrum.DividerSize;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-divider': {
                children: undefined;
                class?: string;
                size?: Spectrum.DividerSize;
            };
        }
    }
}
/**
 * Renders a divider.
 *
 * @example
 * ```jsx
 * <Spectrum.Divider size="large" />
 * ```
 */
export default function Divider(props: Props): JSX.Element;
export {};
