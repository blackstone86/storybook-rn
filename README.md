A starter project with storybook and react native

# Preview

## Web

<p align="center">
  <img alt="Web" width="600" src="https://github.com/blackstone86/storybook-rn/blob/main/preview/web.png?raw=true">
</p>

## Emulator and Xiaomi11_Ultra

<p align="center">
  <img alt="Emulator" width="300" height="600" src="https://github.com//blackstone86/storybook-rn/blob/main/preview/emulator.png?raw=true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img alt="Xiaomi11_Ultra" width="300" height="600" src="https://github.com//blackstone86/storybook-rn/blob/main/preview/xiaomi11_Ultra.jpg?raw=true">
</p>

## Core Librarys

| Library name     | Version |
| ---------------- | ------- |
| react            | 18.2.0  |
| react-native     | 0.69.1  |
| react-native-web | 0.18.6  |
| start-storybook  | 6.5.9   |

# Getting started

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
