// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Holey',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
			],
			components: {
				Sidebar: './src/components/CustomSidebar.astro',
			},
			customCss: ['./src/styles/framework.css'],
			head: [
				{
					tag: 'script',
					content: `try{var f=new URLSearchParams(location.search).get('framework')||localStorage.getItem('holey-framework');if(f)document.documentElement.dataset.framework=f}catch(e){}`,
				},
			],
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started' },
				{ label: 'Replacing Placeholders', slug: 'replacing-placeholders' },
				{ label: 'API Reference', slug: 'api' },
				{
					label: 'Concepts',
					items: [
						{ label: 'Hole-Driven Development', slug: 'concepts/hole-driven-development' },
					],
				},
			],
		}),
	],
});
