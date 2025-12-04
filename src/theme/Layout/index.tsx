import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import useSeasonTheme from '../useSeasonTheme';

// Wrapper Layout: call `useSeasonTheme` so it sets `data-season` on <html>
export default function Layout(props: React.ComponentProps<typeof OriginalLayout>): React.ReactElement {
  useSeasonTheme();
  return <OriginalLayout {...props} />;
}
