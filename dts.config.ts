const fileNames = ['index'];

const config = {
	entries: fileNames.map(fileName => ({
		filePath: `./src/${fileName}.tsx`,
		outFile: `./dist/${fileName}.d.ts`,
		noCheck: false,
	})),
};

module.exports = config;
