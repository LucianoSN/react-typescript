module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['airbnb', 'prettier', 'prettier/react'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'warn',
			{ extensions: ['.jsx', '.js', '.tsx', '.ts'] },
		],
		'import/prefer-default-export': 'off',
		'no-param-reassign': 'off',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
