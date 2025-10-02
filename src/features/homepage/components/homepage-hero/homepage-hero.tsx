import type {JSX} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './homepage-hero.module.css';

interface HomepageHeroProps {
  readonly title: string;
  readonly subtitle: string;
  readonly callToAction: {
    readonly label: string;
    readonly href: string;
  };
}

export function HomepageHero({
  title,
  subtitle,
  callToAction,
}: HomepageHeroProps): JSX.Element {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {title}
        </Heading>
        <p className="hero__subtitle">{subtitle}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={callToAction.href}>
            {callToAction.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
