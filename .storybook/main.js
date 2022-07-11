// 需要手动配置
module.exports = {
  // yarn start 命令执行后，生成.ondevice/storybook.requires.js内容
  stories: [
    '../?(components|screens)/**/*.stories.mdx',
    '../?(components|screens)/**/*.stories.?(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web'
  ],
  framework: '@storybook/react'
}
