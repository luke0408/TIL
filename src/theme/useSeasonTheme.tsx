import { useEffect, useState } from 'react';
import { getSeasonForDate, getSeasonThemeForDate, getNextMidnightTimeoutMs, MIDNIGHT_FUDGE_MS } from './seasonUtils';
import type { SeasonTheme, Season } from './seasonThemes';

/**
 * 훅: 현재 날짜 기반 시즌 테마를 반환하고, 자정에 자동 갱신합니다.
 * 사용법:
 * const { season, theme } = useSeasonTheme();
 */
export default function useSeasonTheme(initialDate?: Date): {season: Season; theme: SeasonTheme} {
  const initialSeason = getSeasonForDate(initialDate ?? new Date());
  const [season, setSeason] = useState<Season>(initialSeason);
  const [theme, setTheme] = useState<SeasonTheme>(() => getSeasonThemeForDate(initialDate ?? new Date()).theme);

  useEffect(() => {
    let mounted = true;

    const update = (d = new Date()) => {
      const s = getSeasonForDate(d);
      if (!mounted) {return;}
      setSeason(s);
      setTheme(getSeasonThemeForDate(d).theme);
    };

    // 초기값 동기화
    update(initialDate);

    // 다음 자정까지 남은 시간(밀리초) 계산 후 그 시점에 업데이트와 재타이머 설정
    const scheduleNext = () => {
      const ms = getNextMidnightTimeoutMs(new Date());
      const t = setTimeout(() => {
        update(new Date());
        scheduleNext();
      }, ms + MIDNIGHT_FUDGE_MS);
      return t;
    };

    const timer = scheduleNext();

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [initialDate]);

  // Set `data-season` on <html> so CSS can react to the current season.
  useEffect(() => {
    if (typeof document === 'undefined') {return;}
    const el = document.documentElement;
    const prev = el.getAttribute('data-season');
    el.setAttribute('data-season', season);
    return () => {
      // restore previous value (if any) when unmounting
      if (prev != null) {el.setAttribute('data-season', prev);}
      else {el.removeAttribute('data-season');}
    };
  }, [season]);

  return { season, theme } as const;
}
