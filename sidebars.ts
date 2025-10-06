import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Networking',
      link: {
        type: 'generated-index',
        title: 'Networking',
        description:
          "Networking과 관련된 CS 이론을 정리합니다.",
        keywords: ['Networking', 'http'],
      },
      items: [
        {
          type: 'category',
          label: 'HTTP',
          link: {
            type: 'doc',
            id: 'Networking/HTTP/introduction'
          },
          items: [
            'Networking/HTTP/http-history',
            'Networking/HTTP/transfer-encoding',
            'Networking/HTTP/generic-message',
            'Networking/HTTP/HTTP_host_header',
            'Networking/HTTP/HTTP_Keep_Alive',
            'Networking/HTTP/Message_Start_Line', 
          ]
        },
      ],
    }
  ],
};

export default sidebars;
