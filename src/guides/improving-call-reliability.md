# Improving Call Reliability

This guide covers some basic knowledge about STUN and TURN servers.  
But most importantly why you should use both in production apps.  
  
Having issues getting devices connected together?  
You're definitely in the right place!  

:::warning Don't be discouraged.
Pushing app development to production means striving for reliability and success.  
I'm sure you'd rather have a working call service rather than complaints and eventual failure.
:::

## What is a NAT and how do we get around it?

NAT (Network Address Translation) is a method of mapping an IP Address space to make sure traffic can flow to its desired destination when a device doesn't have a dedicated public IP Address.  

On a typical network you will find a NAT device (Usually a Router) sitting on the edge mapped to a public IP Address waiting to give local IP Addresses to all of the devices on the same network requiring internet access.  

Simply put, all of the devices behind the NAT will have local IP Addresses rather than accessible public IP Addresses and as such the NAT device has to route all internet traffic to the correct devices.  
  
To the internet all devices behind the NAT will just look like one device as they will all be connecting through a single public IP Address.  
  
As annoying as it is there does happen to be a good reason for having a NAT.  
[IPv4](https://en.wikipedia.org/wiki/IPv4_address_exhaustion) only allows around 4.29 billion addresses maximum.  
  
New devices are being created all the time so it makes sense to push them through smaller amounts of public IP Addresses rather than giving them one each.  

As time goes by [IPv6](https://en.wikipedia.org/wiki/IPv6) will eventually be adopted by everything and the whole NAT issue will become less and less of a problem.

## What is a STUN server and why do i need it?

STUN (Session Traversal Utilities for NAT) is a protocol that helps devices behind a NAT connect outside of the local network.  
  
The STUN server enables devices to find out what their public IP Address is, the type of NAT they are behind and also what the accessible public ports associated with the device behind the NAT might be.  

Once that information has been gathered then tests will take place to determine if data can actually route to the device directly without restriction.  

If data can't be routed properly then a relay selection process begins.  
That is if and only if you have a TURN server.

## What is a TURN server and why do i need it?

TURN (Traversal Using Relay NAT) is a protocol specifically designed to help relay traffic around restrictive networks.  

WE NEED MORE HERE

## Where do i go from here?
  
At this point a TURN server will be chosen to relay data for you.  
If you don't use a TURN server then the connection will just outright fail.  

You should always be using a STUN server in parallel with your TURN server as it is used to help determine if direct connections can be established successfully.  

When direct connections aren't possible then the only option is to relay data via your TURN server or fail to connect.

## Are there any free STUN/TURN servers?

Free TURN servers do exist but they are either slow, restrictive or unreliable.  
At this time it is hard to really advise any for production use.  

Google provides STUN servers freely which are generally reliable.  
But don't forget, using just a STUN server won't create a reliable call service.  

`stun:stun.l.google.com:19302`  
`stun:stun1.l.google.com:19302`  
`stun:stun2.l.google.com:19302`  
`stun:stun3.l.google.com:19302`  
`stun:stun4.l.google.com:19302`  

## Can i host my own?

Here are some of the common STUN/TURN server softwares.  
Bare in mind not all TURN server softwares include STUN server functionalities.  

[coturn - STUN + TURN](https://github.com/coturn/coturn) - Plenty of Features, **Recommended**  
[eturnal - STUN + TURN](https://eturnal.net/)  
[stuntman - STUN](https://stunprotocol.org/)  

Make sure the hosting environment you decide to use is open to the internet.  
Having a TURN server means being able to relay traffic around restrictive networks.  
  
Using a restrictive hosting environment wouldn't be doing you any favours.  
Most hosting companies aren't restrictive but might require firewall ports opening.

## Can i test the STUN/TURN servers?

You can use the [Official WebRTC Trickle Ice Sample](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/) to test your STUN/TURN server.  

:::danger Make sure your TURN server has authentication.
Best case would be each user having their own temporary auth.  
Otherwise anyone could potentially use your server for relaying without permission.  
:::
