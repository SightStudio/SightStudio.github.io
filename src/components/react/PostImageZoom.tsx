import { useState } from 'react';
import type { CSSProperties } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Props {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}

export default function PostImageZoom({ src, alt = '', className = '', style }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`${className} cursor-zoom-in`}
        style={style}
        onClick={() => setOpen(true)}
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src }]}
        controller={{ closeOnBackdropClick: true }}
        animation={{ fade: 200 }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        carousel={{ finite: true, imageFit: 'contain' }}
      />
    </>
  );
}
