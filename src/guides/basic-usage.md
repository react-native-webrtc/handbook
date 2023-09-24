# Basic Usage

For starters we're going to import everything ready to use.  
  
Most of the included functionality is similar to how you would deal with WebRTC in your browser. We support a lot of the official WebRTC APIs, see this [document](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection) for more details.  
  
If you see functions that are listed in the document above but not listed below then they are likely not supported by this module yet and will most likely be supported in the near future, we're open to contributions.

```typescript
import {
	RTCIceCandidate,
	RTCPeerConnection,
	RTCSessionDescription,
	RTCView,
	ScreenCapturePickerView,
	RTCRtpTransceiver,
	RTCRtpReceiver,
	RTCRtpSender,
	RTCErrorEvent,
	MediaStream,
	MediaStreamTrack,
	mediaDevices,
	permissions,
	registerGlobals
} from 'react-native-webrtc';
```

## Get Media Devices

Some devices might not have more than 1 camera. The following will allow you to know how many cameras the device has.  
  
You can of-course use `enumerateDevices` to list other media device information too.  

```typescript
let cameraCount = 0;
  
try {
	const devices = await mediaDevices.enumerateDevices();
  
	devices.map( device => {
		if ( device.kind != 'videoinput' ) { return; };
  
		cameraCount = cameraCount + 1;
	} );
} catch( err ) {
	// Handle Error
};
```

## Defining Media Constraints

By default we're sending both audio and video.  
This will allow us to toggle the video stream during a call.  

```typescript
let mediaConstraints = {
	audio: true,
	video: {
		frameRate: 30,
		facingMode: 'user'
	}
};
```

## Getting a Media Stream

Fill me in.

### getUserMedia

If you only want a voice call then you can flip `isVoiceOnly` over to `true`.  
You can then cycle and enable or disable the video tracks on demand during a call.  

```typescript
let localMediaStream;
let isVoiceOnly = false;
  
try {
	const mediaStream = await mediaDevices.getUserMedia( mediaConstraints );
  
	if ( isVoiceOnly ) {
		let videoTrack = await mediaStream.getVideoTracks()[ 0 ];
		videoTrack.enabled = false;
	};
  
	localMediaStream = mediaStream;
} catch( err ) {
	// Handle Error
};
```

### getDisplayMedia

This will allow capturing the device screen, requests permission on execution.  
Make sure to follow [these](/guides/extra-steps/android#screen-capture-support-android-10) extra steps for Android and [these](/guides/extra-steps/ios#screen-capture-support) for iOS.  
Otherwise you'll experience blank streams.

```typescript
try {
	const mediaStream = await mediaDevices.getDisplayMedia();
  
	localMediaStream = mediaStream;
} catch( err ) {
	// Handle Error
};
```

## Destroying the Media Stream

Cycling all of the tracks and stopping them is more than enough to clean up after a call has finished.
You won't usually need to do this for remote tracks, only local.  

```typescript
localMediaStream.getTracks().forEach(
	track => track.stop()
);
  
localMediaStream = null;
```

## Defining Peer Constraints

We're only specifying a STUN server but you should also be using a TURN server.  
Check [this guide](/guides/improving-call-reliability) if you'd like some advice on how to improve call reliability.

```typescript
let peerConstraints = {
	iceServers: [
		{
			urls: 'stun:stun.l.google.com:19302'
		}
	]
};
```

## Creating a Peer Connection

Here we're creating a peer connection required to create a call.  
You can also overwrite hook functions instead of using event listeners.  

```typescript
let peerConnection = new RTCPeerConnection( peerConstraints );
peerConnection.addEventListener( 'connectionstatechange', event => {} );
peerConnection.addEventListener( 'icecandidate', event => {} );
peerConnection.addEventListener( 'icecandidateerror', event => {} );
peerConnection.addEventListener( 'iceconnectionstatechange', event => {} );
peerConnection.addEventListener( 'icegatheringstatechange', event => {} );
peerConnection.addEventListener( 'negotiationneeded', event => {} );
peerConnection.addEventListener( 'signalingstatechange', event => {} );
peerConnection.addEventListener( 'track', event => {} );
```

## Destroying the Peer Connection

When ending a call you should always make sure to dispose of everything ready for another call.
The following should dispose of everything.  

```typescript
peerConnection._unregisterEvents();
peerConnection.close();
peerConnection = null;
```

## Adding the Media Stream

After using one of the media functions above you can then add the media stream to the peer.
The negotiation needed event will be triggered on the peer afterwords.  

```typescript
localMediaStream.getTracks().forEach( 
	track => peerConnection.addTrack( track, localMediaStream );
);
```

## Creating a Data Channel

Usually the call initialiser would create the data channel but it can be done on both sides.  
The negotiation needed event will be triggered on the peer connection afterwords.  

```typescript
let datachannel = peerConnection.createDataChannel( 'my_channel' );
datachannel.addEventListener( 'open', event => {} );
datachannel.addEventListener( 'close', event => {} );
datachannel.addEventListener( 'message', message => {} );
```

## Handling Data Channels

The following event is for the second client, not the client which created the data channel.  
Unless of-course you want both sides to create separate data channels.  

```typescript
peerConnection.addEventListener( 'datachannel', event => {
	let datachannel = event.channel;
  
	// Now you've got the datachannel.
	// You can hookup and use the same events as above ^
} );
```

## Sending a Message via the Data Channel

You can send a range of different data types over data channels, but for this example we're gong to send a simple string.  
  
Bare in mind there are limits so sending large amounts of data isn't usually advised.  

```typescript
datachannel.send( 'Hey There!' );
```

## Destroying the Data Channel

When the peer connection is destroyed everything attached should also be destroyed automatically including data channels.  
  
But as good practice, you can always make sure they are closed.  

```typescript
datachannel.close();
datachannel = null;
```

## Defining Session Constraints

As mentioned above we're going for the approach of offering both video and voice by default for good reasons.   
  
That will allow you to enable and disable video streams while a call is active.  

```typescript
let sessionConstraints = {
	mandatory: {
		OfferToReceiveAudio: true,
		OfferToReceiveVideo: true,
		VoiceActivityDetection: true
	}
};
```

## Creating an Offer

Executed by the call initialiser after media streams have been added to the peer connection.
Typically inside the `negotiationneeded` event.
  
ICE Candidate creation and gathering will start as soon as an offer has been created.  

```typescript
try {
	const offerDescription = await peerConnection.createOffer( sessionConstraints );
	await peerConnection.setLocalDescription( offerDescription );
  
	// Send the offerDescription to the other participant.
} catch( err ) {
	// Handle Errors
};
```

## Creating an Answer

All parties will need to ensure they are handling ICE Candidates correctly.  
Otherwise the offer and answer handshake stages will go a little wonky.  

```typescript
try {
	// Use the received offerDescription
	const offerDescription = new RTCSessionDescription( offerDescription );
	await peerConnection.setRemoteDescription( offerDescription );
  
	const answerDescription = await peerConnection.createAnswer();
	await peerConnection.setLocalDescription( answerDescription );
  
	// Send the answerDescription back as a response to the offerDescription.
} catch( err ) {
	// Handle Errors
};
```

## Toggle the Active Microphone

During an active call you might want to mute your microphone.
Easy to accomplish by flipping the track enabled value to `false`.
Also possible on remote tracks.  

```typescript
let isMuted = false;
  
try {
	const audioTrack = await localMediaStream.getAudioTracks()[ 0 ];
	audioTrack.enabled = !audioTrack.enabled;
  
	isMuted = !isMuted;
} catch( err ) {
	// Handle Error
};
```

## Switching the Active Camera

Naturally we assume you'll be using the front camera by default when starting a call.  
So we set `isFrontCam` as `true` and let the value flip on execution.  

```typescript
let isFrontCam = true;
  
try {
	// Taken from above, we don't want to flip if we don't have another camera.
	if ( cameraCount < 2 ) { return; };
  
	const videoTrack = await localMediaStream.getVideoTracks()[ 0 ];
	videoTrack._switchCamera();
  
	isFrontCam = !isFrontCam;
} catch( err ) {
	// Handle Error
};
```

## Controlling the Remote Audio Volume

Remote audio tracks are automatically handled and played through your audio output.  
The volume of individual tracks can be set with the `_setVolume` function.  
It takes in a number between 0 to 10, defaults to 1.

```typescript
const audioTrack = remoteMediaStream.getAudioTracks()[ 0 ];
audioTrack._setVolume( 0.5 );
```

## Rendering the Media Stream

Once you've gained a local and/or remote stream then rendering it is as follows.  
Don't forget, the user facing camera is usually mirrored.  

```typescript
<RTCView
	mirror={true}
	objectFit={'cover'}
	streamURL={localMediaStream.toURL()}
	zOrder={0}
/>
```

| Parameter | Type | Default | Description |
| :--------- | :---- | :------- | :----------- |
| mirror | boolean | false | Indicates whether the video specified by `streamURL` should be mirrored. |
| objectFit | string | 'contain' | Can be `'contain'` or `'cover'` nothing more or less. | 
| streamURL | string | 'streamURL' | Required to have an actual video stream rendering. |
| zOrder | number | 0 | Similar to zIndex. |
