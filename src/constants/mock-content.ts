export type HomeNote = {
  tag: string;
  title: string;
  description: string;
  dateLabel: string;
  readTimeLabel: string;
};

export const HOME_NOTES: HomeNote[] = [
  {
    tag: 'Database',
    title: 'Optimizing PostgreSQL queries with Indexing',
    description:
      'Understanding how B-tree indexes work and how to analyze query plans to improve database performance.',
    dateLabel: 'Oct 24, 2023',
    readTimeLabel: '5 min read',
  },
  {
    tag: 'Frontend',
    title: 'Building Scalable UI Components',
    description:
      'Exploring the atomic design methodology and how to implement a consistent design system across large projects.',
    dateLabel: 'Oct 22, 2023',
    readTimeLabel: '8 min read',
  },
  {
    tag: 'React',
    title: 'Deep Dive into useMemo and useCallback',
    description:
      'When to actually use memoization in React to prevent unnecessary re-renders without over-engineering.',
    dateLabel: 'Oct 19, 2023',
    readTimeLabel: '4 min read',
  },
];

export const INTENSITY_ROWS: string[][] = [
  ['TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Git', 'Web3'],
  ['Docker', 'Next.js', 'Rust', 'API Design', 'Kubernetes', 'Testing', 'Serverless', 'OAuth'],
  ['Clean Code', 'UI/UX', 'Accessibility', 'AWS', 'Vim', 'Zustand', 'Storybook', 'Performance'],
];

export type ListNote = {
  dateLabel: string;
  tag: string;
  title: string;
};

export const LIST_NOTES: ListNote[] = [
  {dateLabel: 'Oct 24, 2023', tag: '#react', title: 'Using useMemo for performance'},
  {
    dateLabel: 'Oct 21, 2023',
    tag: '#javascript',
    title: 'Deep cloning objects with structuredClone',
  },
  {
    dateLabel: 'Oct 18, 2023',
    tag: '#css',
    title: 'Centering elements with Grid & Place-items',
  },
  {dateLabel: 'Oct 15, 2023', tag: '#python', title: 'List comprehensions vs Filter/Map'},
];

export const POPULAR_TAGS = ['#javascript', '#react', '#css'];

export const DETAIL_TOC_ITEMS = [
  'What is Event Delegation?',
  'Benefits',
  'Practical Example',
] as const;
