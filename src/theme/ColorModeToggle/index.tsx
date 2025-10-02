import React, {type ReactNode} from 'react';
import OriginalToggle from '@theme-original/ColorModeToggle';
import type {Props} from '@theme/ColorModeToggle';
import {
  lightStorage,
  darkStorage,
  type ColorState,
  updateDOMColors,
  LIGHT_PRIMARY_COLOR,
  DARK_PRIMARY_COLOR,
  LIGHT_BACKGROUND_COLOR,
  DARK_BACKGROUND_COLOR,
  COLOR_SHADES,
} from '../../utils/colorUtils';

export default function ColorModeToggle(props: Props): ReactNode {
  return (
    <OriginalToggle
      {...props}
      onChange={(colorMode) => {
        props.onChange(colorMode);
        const isDarkMode = colorMode === 'dark';
        const storage = isDarkMode ? darkStorage : lightStorage;
        const colorState = (JSON.parse(
          storage.get() ?? 'null',
        ) as ColorState | null) ?? {
          baseColor: isDarkMode ? DARK_PRIMARY_COLOR : LIGHT_PRIMARY_COLOR,
          background: isDarkMode
            ? DARK_BACKGROUND_COLOR
            : LIGHT_BACKGROUND_COLOR,
          shades: COLOR_SHADES,
        };
        updateDOMColors(colorState, isDarkMode);
      }}
    />
  );
}
