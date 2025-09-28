import type {ReactNode} from 'react';

export interface HomepageFeature {
  readonly title: string;
  readonly Icon: React.ComponentType<React.ComponentProps<'svg'>>;
  readonly description: ReactNode;
}
