const sidebars = {
	docs: [
		{
			type: 'doc',
			label: 'Introduction',
			id: 'intro'
		},
		{
			type: 'doc',
			label: 'Getting Started',
			id: 'getting-started'
		},
		{
			type: 'category',
			label: 'Installation',
			link: {
				type: 'generated-index',
				title: 'Installation',
			//	description: 'derp',
				slug: '/category/installation'
			},
			items: [
				'installation/android',
				'installation/ios',
				'installation/macos',
				'installation/windows',
				'installation/web',
				'installation/expo'
			]
		},
		{
			type: 'category',
			label: 'User Guide',
			link: {
				type: 'generated-index',
				title: 'User Guide',
			//	description: 'herp',
				slug: '/category/user-guide'
			},
			items: [
				'user-guide/basic-usage',
				'user-guide/call-guide',
				'user-guide/call-reliability'
			]
		},
		{
			type: 'category',
			label: 'Developer Guide',
			link: {
				type: 'generated-index',
				title: 'Developer Guide',
			//	description: 'derp',
				slug: '/category/developer-guide'
			},
			items: [
				'developer-guide/building',
				'developer-guide/contributing'
			]
		},
		{
			type: 'category',
			label: 'Other Modules',
			link: {
				type: 'generated-index',
				title: 'Other Modules',
			//	description: 'herp',
				slug: '/category/other-modules'
			},
			items: [
				'other-modules/call-keep',
				'other-modules/incall-manager'
			]
		},
		{
			type: 'doc',
			label: 'FAQs',
			id: 'faqs'
		}
	]
};

module.exports = sidebars;