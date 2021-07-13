import React, { useEffect, useRef } from 'react';
import { SpectrumComponentSize, SpectrumComponetDefaults } from './common';

namespace Spectrum {
  export type LinkVariant = 'overBackground';
}

type Props = {
  children?: React.ReactNode;
  onClick?: (e: MouseEvent) => void;
  className?: string;
  href?: string;
  quiet?: boolean;
  variant?: Spectrum.LinkVariant;
  size?: SpectrumComponentSize;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-link': {
        children?: React.ReactNode;
        ref?: React.RefObject<HTMLElement>;
        class?: string;
        href?: string;
        quiet?: boolean;
        variant?: Spectrum.LinkVariant;
        size?: SpectrumComponentSize;
      };
    }
  }
}

/**
 * Renders a link, that when clicked can launch a webpage in the user's default browser.
 *
 * @example
 * ```jsx
 * <Spectrum.Link href="https://thejustinwalsh.com">TJW</Spectrum.Link>
 * ```
 */
export default function Link(props: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const dispatchClick = (e: MouseEvent) => props.onClick?.(e);

    ref.current?.addEventListener('click', dispatchClick);
    return () => {
      ref.current?.removeEventListener('click', dispatchClick);
    };
  }, [props.onClick]);

  return (
    <sp-link
      ref={ref}
      class={props.className}
      href={props.href}
      quiet={props.quiet || undefined}
      variant={props.variant}
      size={props?.size || SpectrumComponetDefaults.defaultSize}
    >
      {props.children}
    </sp-link>
  );
}
