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
						sidebarPath: require.resolve( './sidebars.js' )
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
						label: 'Community',
						href: 'https://react-native-webrtc.discourse.group',
						position: 'left'
					},
					{
						label: 'GitHub',
						href: 'https://github.com/react-native-webrtc/react-native-webrtc',
						position: 'right'
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
						title: 'More',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/react-native-webrtc/react-native-webrtc'
							}
						]
					}
				],
			//	copyright: `Copyright © ${new Date().getFullYear()} React Native WebRTC - Built with Docusaurus.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		}
	)
};

module.exports = config;