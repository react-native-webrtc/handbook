# Supported Features

|  | Android | iOS | tvOS | macOS* | Windows* | Web* | Expo* |
| :- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Audio/Video | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | - | - | :heavy_check_mark: | :heavy_check_mark: |
| Data Channels | :heavy_check_mark: | :heavy_check_mark: | - | - | - | :heavy_check_mark: | :heavy_check_mark: |
| Screen Capture | :heavy_check_mark: | :heavy_check_mark: | - | - | - | :heavy_check_mark: | :heavy_check_mark: |
| Plan B | - | - | - | - | - | - | - |
| Unified Plan* | :heavy_check_mark: | :heavy_check_mark: | - | - | - | :heavy_check_mark: | :heavy_check_mark: |
| Simulcast* | :heavy_check_mark: | :heavy_check_mark: | - | - | - | :heavy_check_mark: | :heavy_check_mark: |

## TODO
Instead of this write something, highlight the vast supported features on what platforms and also the unsupported stuff.
##

:::warning Screen Capturing requires extra setup.
Make sure to follow the extra steps for Android and iOS or you will get blank streams.
:::

:::tip Unified Plan - As of version 106.0.0
Unified Plan is now the only supported mode.  
Those still in need of Plan B will need to use an older release.
:::

:::tip Simulcast - As of version 111.0.0
Simulcast is now possible due to using software encode/decode factories by default.  
Hardware codecs can still be used but require extra setup and have long standing issues.
:::

### Security Warning

https://support.google.com/faqs/answer/12577537

## WebRTC Revision

* Currently used revision: [M111](https://github.com/jitsi/webrtc/tree/M111)
* Supported architectures
  * Android: armeabi-v7a, arm64-v8a, x86, x86_64
  * iOS: arm64, x86_64
  * macOS: (temporarily disabled)

:::info You can build your own WebRTC version.
Follow the [building guide](../building-webrtc.md) if you'd like to use an older or newer WebRTC revision.
:::
