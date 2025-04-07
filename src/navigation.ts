import {getAsset, getBlogPermalink, getPermalink} from './utils/permalinks';

/**
 * 화면 상단의 헤더에 표시되는 네이게이션 바
 */
export const headerData = {
  links: [
    {
      text: '블로그',
      href: getBlogPermalink(),
    },
    {
      text: '스터디',
      href: getPermalink('/study'),
    },
  ],
};

export const footerData = {
  links: [],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/SightStudio' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/dong-min-seol-243b6119a' },
    { ariaLabel: 'Tistory', icon: 'tabler:circle-letter-t', href: 'https://sightstudio.tistory.com' },
  ],
  footNote: `네가 선택한 개발자다. 악으로 깡으로 버텨라`,
};
