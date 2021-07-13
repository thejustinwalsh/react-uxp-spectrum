import React, { useEffect, useRef } from 'react';
import { SpectrumComponentSize, SpectrumComponetDefaults } from './common';

namespace Spectrum {
  export interface ActionButtonEvent extends globalThis.Event {
    readonly target: (EventTarget & unknown) | null;
  }
}

type Props = {
  children?: React.ReactNode;
  onClick?: (e: Spectrum.ActionButtonEvent) => void;
  className?: string;
  disabled?: boolean;
  quiet?: boolean;
  size?: SpectrumComponentSize;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-action-button': {
        children?: React.ReactNode;
        ref?: React.RefObject<HTMLElement>;
        class?: string;
        disabled?: boolean;
        quiet?: boolean;
        size?: SpectrumComponentSize;
      };
    }
  }
}

/**
 * Renders an action button.
 *
 * @example
 * ```jsx
 * <Spectrum.ActionButton>
 *   <Spectrum.Icon name="ui:Magnifier" size="xs" slot="icon" />
 *   Zoom
 * </Spectrum.ActionButton>
 * ```
 */
export default function ActionButton(props: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const dispatchClick = (e: Event) =>
      props.onClick?.(e as Spectrum.ActionButtonEvent);

    ref.current?.addEventListener('click', dispatchClick);
    return () => {
      ref.current?.removeEventListener('click', dispatchClick);
    };
  }, [props.onClick]);

  return (
    <sp-action-button
      ref={ref}
      class={props?.className}
      disabled={props?.disabled || undefined}
      quiet={props?.quiet || undefined}
      size={props?.size || SpectrumComponetDefaults.defaultSize}
    >
      {props?.children}
    </sp-action-button>
  );
}
