# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**



# Web rtc.

Webrtc stands for Real-Time Communication.
WebRTC makes the peer-to-peer communication between browsers possible. Using the NAT ( Network Address Translation) traversal framework — ICE, we are able find the most appropriate route between the browsers and make them communicate without mediator.
Before Webrtc
It uses the signaling (sip protocole) managed by peers.js

**Sip protocol:**

Protocole: A protocol is a set of universal standards for computer communication.

Sip : is a live communication phone video ect. Example:  phone calls with Voice over IP, or VoIP
peerjs: manages the sip communcation. Sip resides on the application layer of the protocole.

How it works: The Session Description Protocol, or SDP, handles media details. Real-time Transport Protocol, or RTP, handles the delivery of data.SIP starts by initiating a call with one or more people. In this message, the SIP client establishes parameters for the request. It does this using the header fields previously mentioned.


What do you need for sip to work?
**How it works:**

The Session Description Protocol, or SDP, handles media details. Real-time Transport Protocol, or RTP, handles the delivery of data. SIP starts by initiating a call with one or more people. In this message, the SIP client establishes parameters for the request. It does this using the header fields previously mentioned.

PeerJs
WebRtc Implementation
src :
https://grafikart.fr/tutoriels/webrtc-864

https://www.toptal.com/webrtc/taming-webrtc-with-peerjs

https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setLocalDescription

https://www.baeldung.com/webrtc

https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onnegotiationneeded


https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addStream


https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addIceCandidate

https://www.geeksforgeeks.org/interactive-connectivity-establishment-ice/


https://www.google.com/search?q=stun+server&rlz=1C1GCEB_enBE962BE962&oq=stun+server&aqs=chrome..69i57j0i512l3j0i22i30l3j69i60.3232j0j4&sourceid=chrome&ie=UTF-8


https://whatismyipaddress.com/nat



-------

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
