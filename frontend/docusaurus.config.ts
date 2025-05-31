import { themes as prismThemes } from 'prism-react-renderer';
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
    title: "hololinked - pythonic SCADA/IoT",
    tagline: "Pythonic Supervisory Control and Data Acquisition (SCADA) / Internet of Things (IoT)",
    // favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://hololinked.dev',
    baseUrl: '/',

    projectName: 'hololinked', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

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
            items: [
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

    } satisfies Preset.ThemeConfig,

    customFields: {
        backendURL: process.env.BACKEND_URL 
    },
};

export default config;
