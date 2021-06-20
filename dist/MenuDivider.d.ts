/// <reference types="react" />
declare type Props = {
    className?: string;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-menu-divider': {
                children: undefined;
                class?: string;
            };
        }
    }
}
export default function MenuDivider(props: Props): JSX.Element;
export {};
