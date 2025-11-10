import React, {type ReactNode} from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import type {Props} from '@theme/CodeBlock';

export default function CodeBlockWrapper(props: Props): ReactNode {
    return <CodeBlock {...props} />;
  }