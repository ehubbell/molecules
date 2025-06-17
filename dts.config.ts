const fileNames = ['index', 'toasts'];

const config = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: fileNames.map(fileName => {
		if (fileName !== 'index') {
			return {
				filePath: `./src/molecules/${fileName}/index.tsx`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: true,
			};
		}
		return {
			filePath: `./src/${fileName}.tsx`,
			outFile: `./dist/${fileName}.d.ts`,
			noCheck: true,
		};
	}),
};

module.exports = config;
