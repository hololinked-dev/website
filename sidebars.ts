import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars : SidebarsConfig = {
    blogAsDocSidebar: [
        {
            type: 'category',
            label: 'Spectrometer GUI',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                'Spectrometer GUI/introduction',
                'Spectrometer GUI/appbar',
                {
                    type: 'category',
                    label: 'Device Console',
                    link: {
                        type: 'doc',
                        id: 'Spectrometer GUI/device-console'
                    },
                    collapsed: true,
                    items: [
                        'Spectrometer GUI/control-bar',
                        {
                            type: 'category',
                            label: 'Graph Display',
                            link: {
                                type: 'doc',
                                id: 'Spectrometer GUI/spectrum-graph'
                            },
                            collapsed: true,
                            items: [
                                'Spectrometer GUI/spectrum-graph-controls'
                            ]
                        },
                        'Spectrometer GUI/settings'
                    ]
                }
            ],
        },
    ],

    // https://docusaurus.io/docs/sidebar
};

export default sidebars;
