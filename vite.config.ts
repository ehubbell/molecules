import { exec } from 'node:child_process';
import path from 'path';
import react from '@vitejs/plugin-react';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

export function pushBuild() {
	return {
		name: 'yalc-push',
		closeBundle: async () => {
			exec('dts-bundle-generator --config dts.config.ts', (response, error) => {
				if (error) console.error(error);
				if (response) console.log(response);
				exec('npx yalc push', (response, error) => (error ? console.error(error) : null));
			});
		},
	};
}

export default defineConfig(({ mode }) => {
	const plugins = mode !== 'production' ? [pushBuild(), react()] : [react()];

	return {
		base: './',
		build: {
			sourcemap: mode !== 'production',
			lib: {
				entry: [
					path.resolve(__dirname, 'src/index.tsx'),
					path.resolve(__dirname, 'src/molecules/feedbacks/feedbacks'),
					path.resolve(__dirname, 'src/molecules/items/items'),
					path.resolve(__dirname, 'src/molecules/paginations/paginations'),
					path.resolve(__dirname, 'src/molecules/skeletons/skeletons'),
					path.resolve(__dirname, 'src/molecules/toasts/toasts'),
					path.resolve(__dirname, 'src/molecules/toggles/toggles'),
				],
				name: 'Molecules',
				formats: ['es', 'cjs'],
				fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
			},
			rollupOptions: {
				external: ['react', 'react-dom', 'react/jsx-runtime'],
				output: {
					globals: {
						react: 'React',
						'react-dom': 'ReactDOM',
						'react/jsx-runtime': 'react/jsx-runtime',
					},
				},
				plugins: [peerDepsExternal()],
			},
		},
		plugins,
		resolve: {
			alias: {
				src: path.resolve(__dirname, '/src'),
				molecules: path.resolve(__dirname, '/src/molecules'),
			},
		},
	};
});
