# React Native Web

The [react-native-webrtc-web-shim](https://github.com/react-native-webrtc/react-native-webrtc-web-shim) project provides a shim for [react-native-web](https://github.com/necolas/react-native-web) support.  
  
That will allow you to use ["almost"](https://github.com/react-native-webrtc/react-native-webrtc-web-shim/tree/main#setup) the exact same code in your mixed web project as you would with [react-native](https://reactnative.dev/) directly.  

## Registering Globals

```javascript
import { registerGlobals } from 'react-native-webrtc';
```

You'll only really need to use this function if you are mixing project development with libraries that use browser based WebRTC functions. Also applies if you are making your project compatible with react-native-web.  

```javascript
registerGlobals();
```

Here is a list of everything that will be linked up.  

```javascript
navigator.mediaDevices.getUserMedia();
navigator.mediaDevices.getDisplayMedia();
navigator.mediaDevices.enumerateDevices();
  
window.RTCIceCandidate
window.RTCPeerConnection
window.RTCRtpReceiver
window.RTCRtpSender
window.RTCSessionDescription
window.MediaStream
window.MediaStreamTrack
window.MediaStreamTrackEvent
window.RTCRtpTransceiver
window.RTCRtpReceiver
window.RTCRtpSender
window.RTCErrorEvent
```
