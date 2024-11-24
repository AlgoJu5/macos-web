import type { HtmlTagDescriptor, Plugin } from 'vite';

export function prefetch(): Plugin {
	return {
		name: 'prefetch',

		enforce: 'post',
		apply: 'build',

		transformIndexHtml: (html, ctx) => {
			const base = '/macos-web/'; // Add your base path here
			const tags = Object.keys(ctx.bundle)
				.filter((v) => !v.toString().endsWith('webp'))
				.map(
					(chunkName) =>
						({
							injectTo: 'head',
							tag: 'link',
							attrs: {
								rel: 'prefetch',
								href: `${base}${chunkName}`, // Add the base path to the hre
							},
						}) as HtmlTagDescriptor,
				);

			return {
				html,
				tags,
			};
		},
	};
}
