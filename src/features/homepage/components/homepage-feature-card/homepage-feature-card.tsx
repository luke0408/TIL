import type {JSX} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import type {HomepageFeature} from '../../types/homepage-feature';
import styles from '../homepage-feature-section/homepage-feature-section.module.css';

interface HomepageFeatureCardProps {
  readonly feature: HomepageFeature;
}

export function HomepageFeatureCard({feature}: HomepageFeatureCardProps): JSX.Element {
  const {Icon, title, description} = feature;

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}
