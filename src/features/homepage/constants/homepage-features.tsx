import MountainIllustration from '@site/static/img/undraw_docusaurus_mountain.svg';
import TreeIllustration from '@site/static/img/undraw_docusaurus_tree.svg';
import ReactIllustration from '@site/static/img/undraw_docusaurus_react.svg';

import type {HomepageFeature} from '../types/homepage-feature';

export const HOMEPAGE_FEATURES: readonly HomepageFeature[] = [
  {
    title: 'Easy to Use',
    Icon: MountainIllustration,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used
        to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Icon: TreeIllustration,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead
        and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Icon: ReactIllustration,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be
        extended while reusing the same header and footer.
      </>
    ),
  },
] as const;
