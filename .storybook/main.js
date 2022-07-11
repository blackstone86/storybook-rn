// 需要手动配置
module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web'
  ],
  framework: '@storybook/react'
}
