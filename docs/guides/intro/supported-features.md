# Supported Features

| Feature | Android | iOS | macOS | Windows | RN Web | Expo |
| :------- | :-------: | :---: | :-----: | :-------: | :------: | :----: |
| Audio/Video | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | - | :heavy_check_mark: | :heavy_check_mark: |
| Data Channels | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | - | :heavy_check_mark: | :heavy_check_mark: |
| Screen Capture* | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | - | :heavy_check_mark: | :heavy_check_mark: |
| Plan B* | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | - | :heavy_check_mark: | :heavy_check_mark: |
| Unified Plan* | - | - | - | - | - | - |

:::warning Screen Capturing requires extra setup.
Make sure to follow the extra steps for Android and iOS or you will get blank streams.
:::

:::danger Plan B is due to be deprecated soon.
Nothing to worry about, our docs will be updated to reflect the changes.
:::

:::tip Unified Plan is in active development.
Plan B will remain default until adequate support and testing has been completed.
:::

## WebRTC Revision

* Currently used revision: [M100](https://github.com/jitsi/webrtc/releases/tag/v100.0.0)
* Supported architectures
  * Android: armeabi-v7a, arm64-v8a, x86, x86_64
  * iOS: arm64, x86_64 (for bitcode support, run [this script](https://raw.githubusercontent.com/react-native-webrtc/react-native-webrtc/master/tools/downloadBitcode.sh))
  * macOS: x86_64

:::info You can build your own WebRTC version.
Follow the [building guide](../building-webrtc.md) if you'd like to use an older or newer WebRTC revision.
:::
