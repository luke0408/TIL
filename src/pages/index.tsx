import type {JSX} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import {HomepageFeatureSection, HomepageHero} from '../features/homepage';

const DOCS_INTRO_PATH = '/docs/intro';
const CTA_LABEL = 'TIL Notes';
const PAGE_DESCRIPTION = 'Description will go into a meta tag in <head />';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const {title, tagline} = siteConfig;

  return (
    <Layout title={`Hello from ${title}`} description={PAGE_DESCRIPTION}>
      <HomepageHero
        title={title}
        subtitle={tagline}
        callToAction={{label: CTA_LABEL, href: DOCS_INTRO_PATH}}
      />
      <main>
        <HomepageFeatureSection />
      </main>
    </Layout>
  );
}
