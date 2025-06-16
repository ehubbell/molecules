const fileNames = ['index', 'toasts'];

const config = {
	entries: fileNames.map(fileName => {
		if (fileName !== 'index') {
			return {
				filePath: `./src/molecules/${fileName}/${fileName}.ts`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: false,
			};
		}
		return {
			filePath: `./src/${fileName}.tsx`,
			outFile: `./dist/${fileName}.d.ts`,
			noCheck: false,
		};
	}),
};

module.exports = config;
