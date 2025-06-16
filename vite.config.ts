import { exec } from 'node:child_process';
import path from 'path';
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
	const plugins = mode !== 'production' ? [pushBuild()] : [];

	return {
		base: './',
		build: {
			sourcemap: true,
			lib: {
				entry: path.resolve(__dirname, 'src/index.tsx'),
				name: 'Hooks',
				formats: ['es', 'cjs'],
				fileName: (format, entryName) => `${entryName}.${format}.js`,
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
				hooks: path.resolve(__dirname, '/src/hooks'),
			},
		},
	};
});
