import React, { useEffect, useRef } from 'react';
import { SpectrumComponentSize, SpectrumComponetDefaults } from './common';

namespace Spectrum {
  export interface MenuItemEvent extends globalThis.Event {
    readonly target: (EventTarget & { selected: boolean }) | null;
  }
}

type Props = {
  children?: React.ReactNode;
  onClick?: (e: Spectrum.MenuItemEvent) => void;
  className?: string;
  disabled?: boolean;
  value?: string;
  selected?: boolean;
  size?: SpectrumComponentSize;
  keyCustom?: number | string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-menu-item': {
        children?: React.ReactNode;
        ref?: React.RefObject<HTMLElement>;
        key?: string | number;
        class?: string;
        disabled?: boolean;
        selected?: boolean;
        value?: string;
        size?: SpectrumComponentSize;
      };
    }
  }
}

/**
 * Renders a menu item, with an optional checkmark indicating selection.
 *
 * @example
 * ```jsx
 * <Spectrum.Menu>
 *   <Spectrum.MenuItem disabled>California</Spectrum.MenuItem>
 *   <Spectrum.MenuItem>Phoenix</Spectrum.MenuItem>
 *   <Spectrum.MenuItem selected>Portland</Spectrum.MenuItem>
 * </Spectrum.Menu>
 * ```
 */

export default function MenuItem(props: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const dispatchClick = (e: Event) =>
      props.onClick?.(e as Spectrum.MenuItemEvent);

    ref.current?.addEventListener('click', dispatchClick);
    return () => {
      ref.current?.removeEventListener('click', dispatchClick);
    };
  }, [props.onClick]);

  return (
    <sp-menu-item
      ref={ref}
      class={props.className}
      disabled={props.disabled || undefined}
      selected={props.selected || undefined}
      value={props.value}
      size={props?.size || SpectrumComponetDefaults.defaultSize}
      key={props?.keyCustom}
    >
      {props.children}
    </sp-menu-item>
  );
}
