/**
 * 시즌별 테마 팔레트 정의
 * - 사용법: `import { SEASON_THEMES, type Season } from 'src/theme/seasonThemes';`
 * - 각 테마는 `name`, `description`, `colors`(primary/secondary/background/text), `emoji` 를 가집니다.
 */

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

// The concrete color values are defined in `src/css/custom.css` under
// `[data-season][data-theme]` selectors (see custom.css). To avoid
// duplicating hex values here, components should use CSS variables exposed
// by that stylesheet. We therefore reference the CSS variables below.
export const SEASON_THEMES = {
  spring: {
    name: '봄',
    description: '부드럽고 화사한 색감 — 학습과 정리의 시작을 돕는 팔레트',
    emoji: '🌸',
    colors: {
      primary: 'var(--ifm-color-primary)',
      secondary: 'var(--ifm-color-secondary, var(--ifm-color-primary-light))',
      background: 'var(--ifm-background-color)',
      text: 'var(--ifm-font-color-base)',
    },
  },
  summer: {
    name: '여름',
    description: '밝고 활기찬 색감 — 에너지와 가독성에 초점',
    emoji: '☀️',
    colors: {
      primary: 'var(--ifm-color-primary)',
      secondary: 'var(--ifm-color-secondary, var(--ifm-color-primary-light))',
      background: 'var(--ifm-background-color)',
      text: 'var(--ifm-font-color-base)',
    },
  },
  autumn: {
    name: '가을',
    description: '따뜻하고 안정적인 색감 — 장기 보존할 노트에 적합',
    emoji: '🍂',
    colors: {
      primary: 'var(--ifm-color-primary)',
      secondary: 'var(--ifm-color-secondary, var(--ifm-color-primary-light))',
      background: 'var(--ifm-background-color)',
      text: 'var(--ifm-font-color-base)',
    },
  },
  winter: {
    name: '겨울',
    description: '크리스마스를 연상시키는 따뜻한 레드·그린 팔레트 — 축제적이면서도 가독성 유지',
    emoji: '🎄',
    colors: {
      primary: 'var(--ifm-color-primary)',
      secondary: 'var(--ifm-color-secondary, var(--ifm-color-primary-light))',
      background: 'var(--ifm-background-color)',
      text: 'var(--ifm-font-color-base)',
    },
  },
} as const;

export const SEASON_LIST: Season[] = ['spring', 'summer', 'autumn', 'winter'];

export type SeasonTheme = typeof SEASON_THEMES[Season];

export default SEASON_THEMES;
