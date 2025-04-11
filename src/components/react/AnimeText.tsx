import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface Props {
  className: string
  text: string;
}

export default function AnimeText({ text, className }: Props) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (el.current) {
      animate(`.${className}`, {
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      });
    }
  }, []);

  return (
    <span className={`animated ${className}`} ref={el} style={{ display: 'inline-block' }}>
      {text}
    </span>
  );
}
