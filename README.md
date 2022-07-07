A starter project with react native 0.68, @storybook/react-native 6.0 beta, storybook/addon-react-native-web

# Preview

<p align="center">
  <img alt="preview" width="250" src="https://github.com//blackstone86/storybook-rn/blob/main/preview/emulator.png?raw=true">
  <img alt="preview" width="250" src="https://github.com/blackstone86/storybook-rn/blob/main/preview/web.png?raw=true">
  <img alt="preview" width="250" src="https://github.com/blackstone86/storybook-rn/blob/main/preview/xiaomi11_Ultra.png?raw=true">
</p>

## Core Librarys

| Library name     | Version |
| ---------------- | ------- |
| react            | 18.2.0  |
| react-native     | 0.69.1  |
| react-native-web | 0.18.6  |
| start-storybook  | 6.5.9   |

# getting started

To get all the dependencies run

```
yarn install
```

To run on the web use

```
yarn storybook
```

To run on ios or android

```
yarn start
```

in another terminal run

```
yarn ios
```

or

```
yarn android
```

If you add new stories on the native (ondevice version) you either need to have the watcher running or run the stories loader

To update the stories one time

```
yarn update-stories
```

To watch the stories files

```
yarn storybook-watcher
```
