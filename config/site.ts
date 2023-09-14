import { env } from '@/env.mjs';
import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Эдуард Сысоев - Портфолио',
  description: 'Краткая информация обо мне, чтобы лучше познакомиться',
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    vkProfile: 'https://vk.com/sysoeev',
    instagramProfile: 'https://instagram.com/edssv',
    githubProfile: 'https://github.com/edssv',
    telegramProfile: 'https://t.me/forever_better',
    github: 'https://github.com/edssv/aboutme',
  },
  creator: 'Эдуард Сысоев',
};
