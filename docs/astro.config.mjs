import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'node:path';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'https://sheepdogjs.com',
	vite: {
		resolve: {
			alias: {
				'@assets': path.resolve(process.cwd(), './src/assets'),
				'@components': path.resolve(process.cwd(), './src/components'),
			},
		},
	},
	integrations: [
		starlight({
			title: '@sheepdog/svelte',
			expressiveCode: {
				themes: ['github-dark-default', 'github-light-default'],
			},
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'shortcut icon',
						href: '/logo-light.svg',
						media: '(prefers-color-scheme: light)',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'shortcut icon',
						href: '/logo-dark.svg',
						media: '(prefers-color-scheme: dark)',
					},
				},
			],
			social: {
				github: 'https://github.com/mainmatter/sheepdog',
			},
			customCss: ['./src/styles/global.css'],
			editLink: {
				baseUrl: 'https://github.com/mainmatter/sheepdog/edit/main',
			},
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{
							label: 'What is it?',
							link: '/getting-started/what-is-it/',
						},
						{
							label: 'Installation',
							link: '/getting-started/installation/',
						},
						{
							label: 'Basic Usage',
							link: '/getting-started/usage/',
						},
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Mid run cancelation',
							link: '/guides/mid-run-cancelation/',
						},
						{
							label: 'Task modifiers',
							link: '/guides/task-modifiers/',
						},
						{
							label: 'Async Transform',
							link: '/guides/async-transform/',
						},
					],
				},
				{
					label: 'Reference',
					autogenerate: {
						directory: 'reference',
					},
				},
			],
		}),
		svelte(),
	],
});
