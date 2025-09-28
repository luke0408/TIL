import type {JSX} from 'react';

import {HOMEPAGE_FEATURES} from '../../constants/homepage-features';
import {HomepageFeatureCard} from '../homepage-feature-card/homepage-feature-card';
import styles from './homepage-feature-section.module.css';

export function HomepageFeatureSection(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {HOMEPAGE_FEATURES.map((feature) => (
            <HomepageFeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
