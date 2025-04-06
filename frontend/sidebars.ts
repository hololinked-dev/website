import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars : SidebarsConfig = {
    examplesAsDocSidebar: [
        {
            type: 'category',
            label: 'Spectrometer GUI',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                'examples/Spectrometer GUI/introduction',
                'examples/Spectrometer GUI/appbar',
                {
                    type: 'category',
                    label: 'Device Console',
                    link: {
                        type: 'doc',
                        id: 'examples/Spectrometer GUI/device-console'
                    },
                    collapsed: true,
                    items: [
                        'examples/Spectrometer GUI/control-bar',
                        {
                            type: 'category',
                            label: 'Graph Display',
                            link: {
                                type: 'doc',
                                id: 'examples/Spectrometer GUI/spectrum-graph'
                            },
                            collapsed: true,
                            items: [
                                'examples/Spectrometer GUI/spectrum-graph-controls'
                            ]
                        },
                        'examples/Spectrometer GUI/settings'
                    ]
                }
            ],
        },
    ]  
    // https://docusaurus.io/docs/sidebar
};

export default sidebars;
