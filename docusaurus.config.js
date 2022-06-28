const lightCodeTheme = require( 'prism-react-renderer/themes/github' );
const darkCodeTheme = require( 'prism-react-renderer/themes/dracula' );

const config = {
	title: 'React Native WebRTC',
	tagline: 'The WebRTC module for React Native',
	url: 'https://react-native-webrtc.github.io',
	baseUrl: '/handbook/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',
	organizationName: 'react-native-webrtc',
	projectName: 'handbook',
	i18n: {
		defaultLocale: 'en',
		locales: [
			'en'
		]
	},
	presets: [
		[
			'classic',
			(
				{
					docs: {
						sidebarPath: require.resolve( './sidebars.js' ),
						editUrl: 'https://github.com/react-native-webrtc/handbook/edit/master/',
						path: 'docs'
					},
					theme: {
						customCss: require.resolve( './src/css/custom.css' )
					}
				}
			)
		]
	],
	themeConfig: (
		{
			algolia: {
				appId: '1234567890',
				apiKey: '1234567890',
				indexName: 'react-native-webrtc'
			},
			navbar: {
				title: 'React Native WebRTC',
				logo: {
					alt: 'React Native WebRTC',
					src: 'img/logo.svg'
				},
				items: [
					{
						label: 'Docs',
						type: 'doc',
						docId: 'intro',
						position: 'left'
					},
					{
						label: 'Examples',
						href: 'https://github.com/react-native-webrtc/examples',
						position: 'left'
					},
					{
						label: 'Community',
						href: 'https://react-native-webrtc.discourse.group',
						position: 'left'
					},
					{
						label: 'Other Modules',
						position: 'right',
						items: [
							{
								label: 'Call Keep',
								href: 'https://github.com/react-native-webrtc/react-native-callkeep'
							},
							{
								label: 'inCall Manager',
								href: 'https://github.com/react-native-webrtc/react-native-incall-manager'
							}
						]
					},
					{
						href: 'https://github.com/react-native-webrtc/react-native-webrtc',
						position: 'right',
						className: 'header-github-link',
						'aria-label': 'GitHub repository'
					}
				]
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Introduction',
								to: '/docs/intro'
							},
							{
								label: 'Getting Started',
								to: '/docs/getting-started'
							},
							{
								label: 'Installation',
								to: '/docs/category/installation'
							},
							{
								label: 'User Guide',
								to: '/docs/category/user-guide'
							},
							{
								label: 'Developer Guide',
								to: '/docs/category/developer-guide'
							},
							{
								label: 'Other Modules',
								to: '/docs/category/other-modules'
							},
							{
								label: 'FAQs',
								to: '/docs/faqs'
							}
						]
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Forum',
								href: 'https://react-native-webrtc.discourse.group'
							}
						]
					},
					{
						title: 'Other Modules',
						items: [
							{
								label: 'Call Keep',
								href: 'https://github.com/react-native-webrtc/react-native-callkeep'
							},
							{
								label: 'inCall Manager',
								href: 'https://github.com/react-native-webrtc/react-native-incall-manager'
							}
						]
					},
					{
						title: 'More',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/react-native-webrtc/react-native-webrtc'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} React Native WebRTC - Built with <a href="https://docusaurus.io/">Docusaurus</a>.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		}
	)
};

module.exports = config;