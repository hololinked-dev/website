import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';



prismThemes.vsLight.plain.backgroundColor = "#f0f4c3" 

/* 
Some useful colors - dont remove 
    "#cddc39", "#8eb247", "#CCFF66"
    "#9EE493", "#6DA34D", "#88D18A"
*/

let today = new Date()

const config: Config = {
    title: 'hololinked',
    tagline: 'pythonic data-acquisition & instrument-control on network',
    // favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://hololinked.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'hololinked', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/VigneshVSV/hololinked-website/tree/main/blog',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }   satisfies Preset.Options,
        ],
    ],
    themeConfig: {
        // Replace with your project's social card
        // image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'hololinked',
            // logo: {
            //     alt: 'My Site Logo',
            //     src: 'img/logo.svg',
            // },
            items: [
                { 
                    type: 'dropdown',
                    label: 'Docs', 
                    position: 'left',
                    items: [
                        {
                            label: 'official python documentation',
                            href: 'https://hololinked.readthedocs.io/en/latest/'
                        },
                        {
                            label: 'mobx-render-engine',
                            href: 'https://mobx-render-engine.hololinked.dev',
                        },
                    ]
                },
                { 
                    label: 'Examples', 
                    position: 'left',
                    type: 'docSidebar',
                    sidebarId: 'examplesAsDocSidebar',
                },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    to : '/contact',
                    label: 'Contact',
                    position: 'left',
                },
                // {
                //     type : 'custom-liveExamplesToggle',
                //     position : 'right'
                // },
                {
                    href: 'https://github.com/VigneshVSV/hololinked',
                    label: 'GitHub',
                    position: 'right',
                }
            ],
        },
        footer: {
            copyright: `Copyright © ${today.getFullYear()} Vignesh Venkatasubramanian Vaidyanathan. Built with Docusaurus. Latest : \ 
                    ${today.toLocaleDateString()} - ${today.toLocaleTimeString().toUpperCase()} CET`,
        },
        prism: {
            theme: prismThemes.vsLight,
            darkTheme: prismThemes.vsDark,
        },

    } satisfies Preset.ThemeConfig
};

export default config;
