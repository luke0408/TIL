import React from 'react';
import type {JSX} from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import {useColorMode} from '@docusaurus/theme-common';
import type {ColorMode} from '@docusaurus/theme-common';
import type {Props} from '@theme/ColorModeToggle';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';

import styles from './styles.module.css';

type AvailableColorMode = Extract<ColorMode, 'light' | 'dark'>;

function getColorModeLabel(colorMode: AvailableColorMode): string {
  switch (colorMode) {
    case 'light':
      return translate({
        message: 'light mode',
        id: 'theme.colorToggle.ariaLabel.mode.light',
        description: 'The name for the light color mode',
      });
    case 'dark':
      return translate({
        message: 'dark mode',
        id: 'theme.colorToggle.ariaLabel.mode.dark',
        description: 'The name for the dark color mode',
      });
    default:
      return colorMode;
  }
}

function getColorModeAriaLabel(colorMode: AvailableColorMode): string {
  return translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the color mode toggle',
    },
    {mode: getColorModeLabel(colorMode)},
  );
}

function getNextColorMode(colorMode: AvailableColorMode): AvailableColorMode {
  return colorMode === 'dark' ? 'light' : 'dark';
}

function CurrentColorModeIcon({
  colorMode,
}: {
  colorMode: AvailableColorMode;
}): JSX.Element {
  switch (colorMode) {
    case 'dark':
      return <IconDarkMode aria-hidden className={styles.icon} />;
    case 'light':
    default:
      return <IconLightMode aria-hidden className={styles.icon} />;
  }
}

export default function ColorModeToggle({
  className,
  buttonClassName,
  value,
  onChange,
}: Props): JSX.Element {
  const isBrowser = useIsBrowser();
  const {colorMode: activeMode} = useColorMode();
  const currentMode = (activeMode ?? value ?? 'light') as AvailableColorMode;
  const nextMode = getNextColorMode(currentMode);
  const ariaLabel = getColorModeAriaLabel(currentMode);

  const handleToggle = () => {
    onChange(nextMode);
  };

  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        className={clsx(
          'clean-btn',
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled,
          buttonClassName,
        )}
        type="button"
        onClick={handleToggle}
        disabled={!isBrowser}
        title={translate(
          {
            message: 'Switch to {mode}',
            id: 'theme.colorToggle.title',
            description: 'Title for the color mode toggle button',
          },
          {mode: getColorModeLabel(nextMode)},
        )}
        aria-label={ariaLabel}
      >
        <CurrentColorModeIcon colorMode={currentMode} />
      </button>
    </div>
  );
}
