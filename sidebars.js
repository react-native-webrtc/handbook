const sidebars = {
	docs: [
		{
			type: 'doc',
			label: 'Getting Started',
			id: 'getting-started'
		},
		{
			type: 'category',
			label: 'Installation',
			link: {
				type: 'doc',
				id: 'installation/intro'
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
				type: 'doc',
				id: 'user-guide/intro'
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
				type: 'doc',
				id: 'developer-guide/intro'
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
				type: 'doc',
				id: 'other-modules/intro'
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