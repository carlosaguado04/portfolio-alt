<script>
	import { NinjaKeys } from 'ninja-keys';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const hotkeys = [
		{
			id: 'home',
			title: 'Home',
			keywords: 'GH main',
			icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="ninja-icon"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
			section: 'Go to',
			handler: () => {
				goto('/', { replaceState: true });
			}
		},
		{
			id: 'about',
			title: 'About Me',
			icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="ninja-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
			keywords: 'GA carlos code work travel',
			section: 'Go to',
			handler: () => {
				goto('/about', { replaceState: true });
			}
		},
		{
			id: 'projects',
			title: 'Projects',
			icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="ninja-icon"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
			keywords: 'GP code movies',
			section: 'Go to',
			handler: () => {
				goto('/projects', { replaceState: true });
			}
		},
		{
			id: 'contact',
			title: 'Contact Me',
			icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="ninja-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
			keywords: 'GC mail twitter instagram linkedin github',
			section: 'Go to',
			handler: () => {
				goto('/contact', { replaceState: true });
			}
		},
		{
			id: 'tools',
			title: 'What I Use',
			icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="ninja-icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
			keywords:
				'vs code vscode nvim vim apple mac macbook keychron razer mouse keyboard terminal iterm warp bear notes markdown',
			section: 'Go to',
			handler: () => {
				goto('/tools', { replaceState: true });
			}
		},

		{
			id: 'twitter',
			title: 'Twitter',
			icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="ninja-icon"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>',
			keywords: 'social twitter',
			section: 'Social',
			handler: () => {
				window.open('https://twitter.com/carlosaguado04');
			}
		},
		{
			id: 'instagram',
			title: 'Instagram',
			icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="ninja-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
			keywords: 'social instagram',
			section: 'Social',
			handler: () => {
				window.open('https://www.instagram.com/carlosaaguado/');
			}
		},
		{
			id: 'linkedin',
			title: 'LinkedIn',
			icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="ninja-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
			keywords: 'social linkedin',
			section: 'Social',
			handler: () => {
				window.open('https://www.linkedin.com/in/carlosaguado04/');
			}
		},
		{
			id: 'github',
			title: 'Source code',
			icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="ninja-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
			keywords: 'GS repo code',
			section: 'Other actions',
			handler: () => {
				window.open('https://github.com/carlosaguado04/portfolio-alt');
			}
		},
		{
			id: 'copy',
			title: 'Copy link',
			icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="ninja-icon"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
			keywords: 'CL link',
			section: 'Other actions',
			handler: () => {
				navigator.clipboard.writeText(window.location.href);
				alert('Link copied');
			}
		}
	];

	onMount(async () => {
		const ninja = document.querySelector('ninja-keys');
		ninja.data = hotkeys;
	});
</script>

<div>
	<ninja-keys class="dark" placeholder="Where to next?" hideBreadcrumbs="true">
		<div slot="footer" />
	</ninja-keys>
	<slot />
</div>
