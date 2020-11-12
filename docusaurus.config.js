module.exports = {
  title: 'Incognito Devframework Docs',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'incognito', // Usually your GitHub org/user name.
  projectName: 'incognito-devframework-docs', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'DevFramework',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/incognitochain/incognito-chain',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label:'Forum',
              href:'https://we.incognito.org',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/incognitodev',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/IncognitoChain',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Incognito GitHub',
              href: 'https://github.com/incognitochain/incognito-chain',
            },
            {
              label: 'Devframework GitHub',
              href: 'https://github.com/0xkumi/incongito-dev-framework',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Incognito Chain. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          path:'./docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
