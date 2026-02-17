export type DirectoryLogoItem = {
  matcher: (name: string) => boolean;
  visual:
    | {
        kind: 'brand';
        src: string;
        alt: string;
      }
    | {
        kind: 'symbol';
        icon: string;
      };
};

export const DIRECTORY_LOGOS: DirectoryLogoItem[] = [
  {
    matcher: (key) => key.includes('javascript'),
    visual: {
      kind: 'brand',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'JavaScript',
    },
  },
  {
    matcher: (key) => key.includes('typescript'),
    visual: {
      kind: 'brand',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'TypeScript',
    },
  },
  {
    matcher: (key) => key.includes('python'),
    visual: {
      kind: 'brand',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      alt: 'Python',
    },
  },
  {
    matcher: (key) => key.includes('react'),
    visual: {
      kind: 'brand',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      alt: 'React',
    },
  },
  {
    matcher: (key) => key.includes('nestjs') || key.includes('nest.js'),
    visual: {
      kind: 'brand',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
      alt: 'NestJS',
    },
  },
  {
    matcher: (key) => key.includes('spring'),
    visual: {
      kind: 'brand',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      alt: 'Spring',
    },
  },
  {
    matcher: (key) => key.includes('npm'),
    visual: {
      kind: 'brand',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      alt: 'npm',
    },
  },
  {
    matcher: (key) => key.includes('aws') || key.includes('cloud'),
    visual: {
      kind: 'brand',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      alt: 'AWS',
    },
  },
  {
    matcher: (key) => key.includes('linux') || key.includes('operatingsystem'),
    visual: {
      kind: 'brand',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      alt: 'Linux',
    },
  },
  {
    matcher: (key) => key.includes('pulumi'),
    visual: {
      kind: 'brand',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pulumi/pulumi-original.svg',
      alt: 'Pulumi',
    },
  },
  {
    matcher: (key) => key.includes('backend'),
    visual: {kind: 'brand', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Backend'},
  },
  {matcher: (key) => key.includes('ai') || key.includes('ml') || key.includes('rag'), visual: {kind: 'symbol', icon: 'neurology'}},
  {matcher: (key) => key.includes('devops'), visual: {kind: 'symbol', icon: 'settings_suggest'}},
  {matcher: (key) => key.includes('network') || key.includes('http'), visual: {kind: 'symbol', icon: 'lan'}},
  {matcher: (key) => key.includes('devgeneral'), visual: {kind: 'symbol', icon: 'hub'}},
  {matcher: (key) => key.includes('book') || key.includes('설계와 구축'), visual: {kind: 'symbol', icon: 'menu_book'}},
  {matcher: (key) => key.includes('excalidraw'), visual: {kind: 'symbol', icon: 'draw'}},
  {matcher: (key) => key.includes('language'), visual: {kind: 'symbol', icon: 'translate'}},
  {matcher: (key) => key.includes('css') || key.includes('style'), visual: {kind: 'symbol', icon: 'css'}},
  {matcher: (key) => key.includes('sql') || key.includes('database') || key.includes('vector'), visual: {kind: 'symbol', icon: 'database'}},
  {matcher: (key) => key.includes('algorithm'), visual: {kind: 'symbol', icon: 'schema'}},
  {matcher: (key) => key.includes('designpattern'), visual: {kind: 'symbol', icon: 'account_tree'}},
  {matcher: (key) => key.includes('refactor'), visual: {kind: 'symbol', icon: 'conversion_path'}},
  {matcher: (key) => key.includes('agile'), visual: {kind: 'symbol', icon: 'groups'}},
];
