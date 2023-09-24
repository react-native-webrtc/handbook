# tvOS / Android TV

In order to use React Native on tvOS, you will need to use [react-native-tvos](https://www.npmjs.com/package/react-native-tvos).  
tvOS support was deprecated and removed from current/future versions of React Native.  
We strongly recommend using React Native 0.69+ with React 18+  

Change the following dependency in your projects `package.json` file to get started. 
``` 
'react-native': 'npm:react-native-tvos@0.69.8-2'
```

## Adjusting the Supported Platform Version

:::warning Make sure you are using CocoaPods 1.10 or higher.
Otherwise you will experience problems.
:::

You may have to change the `platform` field in your podfile.  
`react-native-webrtc` doesn't support tvOS < 16.  
Set it to '16.0' or above. Older versions of tvOS don't support WebRTC.  

```
platform :tvos, '16.0'
```
