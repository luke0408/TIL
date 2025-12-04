import SEASON_THEMES, { type Season, SEASON_LIST, type SeasonTheme } from './seasonThemes';

/**
 * 주어진 날짜(또는 현재 날짜)를 기준으로 시즌을 반환합니다.
 * - 봄: 3~5월
 * - 여름: 6~8월
 * - 가을: 9~11월
 * - 겨울: 12~2월
 */
export const MIDNIGHT_FUDGE_MS = 1000; // 1 second fudge to avoid edge cases at midnight

export function getSeasonForDate(date = new Date()): Season {
  const month = date.getMonth() + 1; // JS months: 0-11

  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
}

export function getSeasonThemeForDate(date = new Date()): {season: Season; theme: SeasonTheme} {
  const season = getSeasonForDate(date);
  return {
    season,
    theme: SEASON_THEMES[season],
  };
}

export function getNextMidnightTimeoutMs(from = new Date()): number {
  const tomorrow = new Date(from);
  tomorrow.setDate(from.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow.getTime() - from.getTime();
}

export { SEASON_THEMES, SEASON_LIST };
