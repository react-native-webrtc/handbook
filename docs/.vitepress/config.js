export default {
	lang: 'en-GB',
	title: 'React Native WebRTC',
	description: 'The WebRTC module for React Native',
	outDir: '../build',
	base: '/handbook/',
	ignoreDeadLinks: true,
	cleanUrls: 'disabled',
	head: [
		[
			'meta',
			{
				name: 'theme-color',
				content: '#3c8772'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				href: '/handbook/logo.svg',
				type: 'image/svg+xml'
			}
		],
		[
			'link',
			{
				rel: 'alternate icon',
				href: '/handbook/favicon.png',
				type: 'image/png',
				sizes: '16x16'
			}
		],
		[
			'link',
			{
				rel: 'mask-icon',
				href: '/handbook/logo.svg',
				color: '#ffffff'
			}
		],
	/*
		[
			'meta',
			{
				property: 'og:title',
				content: ''
			}
		],
		[
			'meta',
			{
				property: 'og:description',
				content: ''
			}
		],
		[
			'meta',
			{
				property: 'og:url',
				content: ''
			}
		],
		[
			'meta',
			{
				property: 'og:image',
				content: ''
			}
		]
	*/
	],
	themeConfig: {
		logo: '/logo.svg',
		siteTitle: 'React Native WebRTC',
		nav: [
			{
				text: 'Docs',
				link: '/guides/intro/getting-started'
			},
			{
				text: 'Examples',
				link: 'https://github.com/react-native-webrtc/examples'
			},
			{
				text: 'Community',
				link: 'https://react-native-webrtc.discourse.group'
			},
			{
				text: 'Other Modules',
				items: [
					{
						text: 'Call Keep',
						link: 'https://github.com/react-native-webrtc/react-native-callkeep'
					},
					{
						text: 'inCall Manager',
						link: 'https://github.com/react-native-webrtc/react-native-incall-manager'
					}
				]
			},
		],
		editLink: {
			pattern: 'https://github.com/react-native-webrtc/handbook/edit/master/docs/:path',
			text: 'Suggest changes to this page'
		},
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/react-native-webrtc/react-native-webrtc'
			},
			{
				icon: {
					svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discourse</title><path d="M12.103 0C18.666 0 24 5.485 24 11.997c0 6.51-5.33 11.99-11.9 11.99L0 24V11.79C0 5.28 5.532 0 12.103 0zm.116 4.563c-2.593-.003-4.996 1.352-6.337 3.57-1.33 2.208-1.387 4.957-.148 7.22L4.4 19.61l4.794-1.074c2.745 1.225 5.965.676 8.136-1.39 2.17-2.054 2.86-5.228 1.737-7.997-1.135-2.778-3.84-4.59-6.84-4.585h-.008z"/></svg>',
				},
				link: 'https://react-native-webrtc.discourse.group'
			}
		],
		sidebar: [
			{
				text: 'Introduction',
				items: [
				/*
					{
						text: 'What is WebRTC?',
						link: '/guides/intro/what-is-webrtc'
					},
				*/
					{
						text: 'Supported Features',
						link: '/guides/intro/supported-features'
					},
					{
						text: 'Getting Started',
						link: '/guides/intro/getting-started'
					}
				]
			},
			{
				text: 'Extra Steps',
				collapsible: true,
				items: [
					{
						text: 'Android 4.4+',
						link: '/guides/extra-steps/android'
					},
					{
						text: 'iOS 11+',
						link: '/guides/extra-steps/ios'
					},
					{
						text: 'macOS 10.13+',
						link: '/guides/extra-steps/macos'
					},
					{
						text: 'Windows - Not Supported',
						link: '/guides/extra-steps/windows'
					},
					{
						text: 'React Native Web',
						link: '/guides/extra-steps/react-native-web'
					},
					{
						text: 'Expo 45+',
						link: '/guides/extra-steps/expo'
					}
				]
			},
			{
				text: 'Guides',
				collapsible: true,
				items: [
					{
						text: 'Basic Usage',
						link: '/guides/basic-usage'
					},
					{
						text: 'Getting a Call Connected',
						link: '/guides/getting-a-call-connected'
					},
					{
						text: 'Improving Call Reliability',
						link: '/guides/improving-call-reliability'
					},
					{
						text: 'Building WebRTC',
						link: '/guides/building-webrtc'
					}
				]
			},
		/*
			{
				text: 'Misc',
				collapsible: true,
				items: [
					{
						text: 'Contributing Guidelines',
						link: '/guides/misc/contributing'
					},
					{
						text: 'Troubleshooting',
						link: '/guides/misc/troubleshooting'
					},
					{
						text: 'FAQs',
						link: '/guides/misc/faqs'
					}
				]
			}
		*/
		],
		footer: {
			message: 'Released under the Apache 2.0 License',
			copyright: 'Copyright © 2022 - React Native WebRTC'
		}
	}
}
