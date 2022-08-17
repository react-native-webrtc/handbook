# Improving Call Reliability

This guide covers some basic knowledge about STUN and TURN servers.  
But most importantly why you should have and use both in production apps.  
  
Having issues getting devices connected together?  
You're definitely in the right place!  

:::warning Don't be discouraged.
Pushing app development to production means striving for reliability and success.
:::

## What is a NAT and how do we get around it?

NAT (Network Address Translation) is a method of mapping an IP Address space to make sure traffic can flow to its desired destination when a device doesn't have a dedicated public IP Address.  

On a typical network you'll find a NAT device sitting on the edge mapped to a public IP Address waiting to handout local IP Addresses to all of the devices on the same network wanting internet access.  

Simply put, all of the devices behind the NAT will have local IP Addresses rather than accessible public IP Addresses and as such the NAT device has to then route all of the traffic to the correct devices.  

To the internet all devices behind the NAT will just look like one device as they will all be going over a single Public IP Address. There is a good reason for having a NAT, like for example the IPv4 limitations where there can only be around 4.29 billion addresses and as new devices are being created all the time it makes sense to throw them over smaller amounts of Public IP Addresses rather than giving them one each.  

## What is a STUN server and why do i need it?

STUN (Session Traversal Utilities for NAT) is a protocol that helps devices behind a NAT connect outside of the local network.  
  
The STUN server enables devices to find out what their public IP Address is, the type of NAT they are behind and also the accessible public port associated with the device behind the NAT.  

Once that information has been gathered tests can take place to determine if data can be routed to the device directly without restriction. If data can't be routed properly then a relay selection process begins.  
  
At this point a TURN server will be chosen to relay data for you.  
If you don't use a TURN server then the connection will just outright fail.  

## What is a TURN server and why do i need it?

TURN (Traversal Using Relay NAT) is a protocol specifically designed to help relay traffic around restrictive networks.  
  
When a direct connection can't be established between peers then the only option is to relay data or fail to connect.  

You should always use a STUN server to determine if direct connections can be established.  
  
Then your TURN server can be used as the fallback option.  
At the end of the day, it is better to have a working call service vs connections failing.  

## Are there any free STUN/TURN servers?

Free TURN servers do exist but they are either slow, restrictive or unreliable.  
As such it is hard to really advise any for actual production use.  

Google provides STUN servers freely which are generally reliable.  
But don't forget, using just a STUN server won't create a reliable call service.  

`stun:stun.l.google.com:19302`  
`stun:stun1.l.google.com:19302`  
`stun:stun2.l.google.com:19302`  
`stun:stun3.l.google.com:19302`  
`stun:stun4.l.google.com:19302`  

## Can i host my own?

Here is just a handful of the common STUN and TURN server softwares.  
Bare in mind not all TURN server softwares include STUN server functionalities.  

[coturn - STUN + TURN](https://github.com/coturn/coturn) - Plenty of Features, **Recommended**  
[eturnal - STUN + TURN](https://eturnal.net/)  
[stuntman - STUN](https://stunprotocol.org/)  

Make sure the host you decide to use has an open network to the internet.  
The whole purpose of having a TURN server is to relay traffic around restrictive networks.  
So it wouldn't make sense to use a restrictive hosting environment.

## Can i test the STUN/TURN servers?

You can use the [Official WebRTC Trickle Ice Sample](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/) to test your STUN and TURN server.  

:::danger Make sure your TURN server has authentication.
Best case would be each user having their own temporary auth.  
Otherwise anyone could potentially use your server for relaying without permission.  
:::
