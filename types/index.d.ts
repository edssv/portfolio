import type { Icons } from '@/components/icons';

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    vkProfile: string;
    githubProfile: string;
    instagramProfile: string;
    telegramProfile: string;
    github: string;
  };
  creator: string;
};
