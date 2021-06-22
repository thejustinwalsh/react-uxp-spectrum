/// <reference types="react" />
declare namespace Spectrum {
    type IconName = 'ui:AlertMedium' | 'ui:AlertSmall' | 'ui:ArrowDownSmall' | 'ui:ArrowLeftMedium' | 'ui:ArrowUpSmall' | 'ui:Asterisk' | 'ui:CheckmarkMedium' | 'ui:CheckmarkSmall' | 'ui:ChevronDownMedium' | 'ui:ChevronDownSmall' | 'ui:ChevronLeftLarge' | 'ui:ChevronLeftMedium' | 'ui:ChevronRightLarge' | 'ui:ChevronRightMedium' | 'ui:ChevronRightSmall' | 'ui:ChevronUpSmall' | 'ui:CornerTriangle' | 'ui:CrossLarge' | 'ui:CrossMedium' | 'ui:CrossSmall' | 'ui:DashSmall' | 'ui:DoubleGripper' | 'ui:FolderBreadcrumb' | 'ui:HelpMedium' | 'ui:HelpSmall' | 'ui:InfoMedium' | 'ui:InfoSmall' | 'ui:Magnifier' | 'ui:More' | 'ui:SkipLeft' | 'ui:SkipRight' | 'ui:Star' | 'ui:StarOutline' | 'ui:SuccessMedium' | 'ui:SuccessSmall' | 'ui:TripleGripper';
    type IconSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    type IconSlot = 'icon';
}
declare type Props = {
    className?: string;
    name?: Spectrum.IconName;
    size?: Spectrum.IconSize;
    slot?: Spectrum.IconSlot;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-icon': {
                children: undefined;
                class?: string;
                name?: Spectrum.IconName;
                size?: Spectrum.IconSize;
                slot?: Spectrum.IconSlot;
            };
        }
    }
}
/**
 * Display a named icon.
 *
 * @example
 * ```jsx
 * <Spectrum.Icon size="xl" name="ui:Magnifier" />
 * ```
 */
export default function Icon(props: Props): JSX.Element;
export {};
