import React from 'react';

type Props = {
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

export default function MenuDivider(props: Props) {
  return <sp-menu-divider class={props.className}>{undefined}</sp-menu-divider>;
}
