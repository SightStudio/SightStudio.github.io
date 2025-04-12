import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

interface Props {
  text: string;
  duration?: number;
}

/**
 * 타이핑 애니메이션을 구현하는 컴포넌트
 *
 * @param text 내용
 * @param duration 애니메이션 지속 시간 (ms)
 */
export default function AnimeTypewriter({ text, duration = 2000 }: Props) {
  const [displayText, setDisplayText] = useState('');
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    const progress = { value: 0 };

    animationRef.current = anime({
      targets: progress,
      value: text.length,
      duration,
      round: 1, // 소수점 없이 정수로
      easing: 'linear',
      update: () => {
        setDisplayText(text.slice(0, progress.value));
      },
    });

    return () => {
      animationRef.current?.pause();
    };
  }, [text, duration]);

  return <span style={{ whiteSpace: 'pre' }}>{displayText}</span>;
}
