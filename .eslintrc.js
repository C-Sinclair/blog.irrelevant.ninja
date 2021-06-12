module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		allowImportExportEverywhere: false,
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
	extends: [
		'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		'plugin:jsx-a11y/recommended',
	],
	plugins: ['simple-import-sort', 'jsx-a11y'],
	rules: {
		semi: [2, 'never'],
		"'operator-linebreak'": 'off',
		'prefer-promise-reject-errors': ['off'],
		'react/jsx-filename-extension': ['off'],
		'react/prop-types': ['warn'],
		'no-return-assign': ['off'],
		"'class-methods-use-this'": 0,
		"'prettier": ['error'],
		'no-unused-vars': ['warn', { argsIgnorePattern: '^_', args: 'after-used', ignoreRestSiblings: true }],
	},
};
