module.exports = {
  // used by web
  stories: [
    '../components/**/*.stories.mdx',
    '../@(components|screens)/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web'
  ],
  framework: '@storybook/react'
}
