/** @type {import('stylelint').Config} */
const config = {
  extends:[
    'stylelint-config-prettier',
    'stylelint-config-standard'
  ],
  plugins:['stylelint-order'],
  rules: [],
  ignoreFiles:[

  ]
}

module.exports = config
