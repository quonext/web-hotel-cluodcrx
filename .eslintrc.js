module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV ===  'off',
         "no-restricted-syntax": [
                "error",
                {
                    "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                    "message": "Unexpected property on console object was called"
                }
            ]
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "vue/no-use-v-if-with-v-for": "off"
  
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
