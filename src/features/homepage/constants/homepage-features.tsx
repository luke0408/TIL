import MountainIllustration from '@site/static/img/undraw_docusaurus_mountain.svg';
import TreeIllustration from '@site/static/img/undraw_docusaurus_tree.svg';
import ReactIllustration from '@site/static/img/undraw_docusaurus_react.svg';

import type {HomepageFeature} from '../types/homepage-feature';

export const HOMEPAGE_FEATURES: readonly HomepageFeature[] = [
  {
    title: '깊게 공부하는 것을 즐기는',
    Icon: MountainIllustration,
    description: (
      <>
        복잡한 개념을 깊게 파고들어 이해하고, 핵심을 정리해 재사용 가능한
        지식으로 남깁니다. 학습한 내용을 실전에서 바로 활용할 수 있게 정리합니다.
      </>
    ),
  },
  {
    title: '개발 문화를 사랑하는',
    Icon: TreeIllustration,
    description: (
      <>
        코드 리뷰, 협업 흐름, 개발 도구와 같은 좋은 개발 문화를 지향합니다.
        실무에서 쓸모있는 관행과 팁을 공유합니다.
      </>
    ),
  },
  {
    title: 'Back + Agent 개발자',
    Icon: ReactIllustration,
    description: (
      <>
        백엔드와 에이전트(Agent) 개발 경험을 바탕으로 아키텍처, 설계 패턴,
        구현 노하우를 실무 중심으로 정리합니다.
      </>
    ),
  },
] as const;
