import React, { useEffect, useRef } from 'react';

namespace Spectrum {
  export interface DropdownEvent extends globalThis.Event {
    readonly target: (EventTarget & { selectedIndex: number }) | null;
  }
}

type Props = {
  children?: React.ReactNode;
  onChange?: (e: Spectrum.DropdownEvent) => void;
  className?: string;
  disabled?: boolean;
  invalid?: boolean;
  quiet?: boolean;
  placeholder?: string;
  selectedIndex?: number;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-dropdown': {
        children?: React.ReactNode;
        ref?: React.RefObject<HTMLElement>;
        class?: string;
        disabled?: boolean;
        invalid?: boolean;
        quiet?: boolean;
        placeholder?: string;
        selectedIndex?: number;
      };
    }
  }
}

/**
 * Renders a dropdown with menu items. The dropdown must contain a {@link Spectrum.Menu}
 * with `slot="options"`, and inside the {@link Spectrum.Menu}, a series of {@link Spectrum.MenuItem}
 * or {@link Spectrum.MenuDivider} elements.
 *
 * @example
 * ```jsx
 * <Spectrum.Dropdown>
 *   <Spectrum.Menu slot="options">
 *     <Spectrum.MenuItem>Deselect</Spectrum.MenuItem>
 *     <Spectrum.MenuDivider></Spectrum.MenuDivider>
 *     <Spectrum.MenuItem disabled>Make work path</Spectrum.MenuItem>
 *   </Spectrum.Menu>
 * </Spectrum.Dropdown>
 * ```
 */
export default function Dropdown(props: Props) {
  const ref = useRef<HTMLElement>(null);
  const dispatchChange = (e: Event) =>
    props.onChange?.(e as Spectrum.DropdownEvent);

  useEffect(() => {
    ref.current?.addEventListener('change', dispatchChange);
    return () => {
      ref.current?.removeEventListener('change', dispatchChange);
    };
  }, [ref]);

  return (
    <sp-dropdown
      ref={ref}
      class={props.className}
      disabled={props.disabled || undefined}
      invalid={props.invalid || undefined}
      quiet={props.quiet || undefined}
      placeholder={props.placeholder}
      selectedIndex={props.selectedIndex}
    >
      {props?.children}
    </sp-dropdown>
  );
}
