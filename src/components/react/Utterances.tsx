import { useEffect, useRef } from 'react';

const REPO = 'SightStudio/blog-comment';
const LABEL = '💬 comment';
const ISSUE_TERM = 'pathname';

/**
 * 블로그 댓글을 위한 Utterances 컴포넌트
 */
export default function Utterances() {
  const ref = useRef<HTMLDivElement>(null);

  const getTheme = () => (document.documentElement.classList.contains('dark') ? 'github-dark' : 'github-light');

  useEffect(() => {
    if (!ref.current) return;

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('repo', REPO);
    script.setAttribute('issue-term', ISSUE_TERM);
    script.setAttribute('label', LABEL);
    script.setAttribute('theme', getTheme());

    ref.current.innerHTML = '';
    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
}
