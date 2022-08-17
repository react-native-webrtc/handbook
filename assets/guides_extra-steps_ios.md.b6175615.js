import{_ as e,c as s,o as a,a as o}from"./app.d5757ab6.js";const y=JSON.parse('{"title":"iOS 11+","description":"","frontmatter":{},"headers":[{"level":2,"title":"Adjusting the Supported Platform Version","slug":"adjusting-the-supported-platform-version"},{"level":2,"title":"Declaring Permissions","slug":"declaring-permissions"},{"level":2,"title":"Screen Capture Support","slug":"screen-capture-support"},{"level":2,"title":"Library not loaded/Code signature invalid","slug":"library-not-loaded-code-signature-invalid"}],"relativePath":"guides/extra-steps/ios.md"}'),n={name:"guides/extra-steps/ios.md"},t=o(`<h1 id="ios-11" tabindex="-1">iOS 11+ <a class="header-anchor" href="#ios-11" aria-hidden="true">#</a></h1><p>Starting with React Native 0.60 due to a new auto linking feature you no longer need to follow manual linking steps but you will need to follow the other steps below if you plan on releasing your app to production.</p><h2 id="adjusting-the-supported-platform-version" tabindex="-1">Adjusting the Supported Platform Version <a class="header-anchor" href="#adjusting-the-supported-platform-version" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">Make sure you are using CocoaPods 1.10 or higher.</p><p>Otherwise you will experience problems.</p></div><p>You may have to change the <code>platform</code> field in your podfile.<br><code>react-native-webrtc</code> doesn&#39;t support iOS &lt; 11<br> Set it to &#39;11.0&#39; or above or you&#39;ll get an error when running <code>pod install</code>.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">platform :ios, &#39;11.0&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="declaring-permissions" tabindex="-1">Declaring Permissions <a class="header-anchor" href="#declaring-permissions" aria-hidden="true">#</a></h2><p>Navigate to <code>&lt;ProjectFolder&gt;/ios/&lt;ProjectName&gt;/</code> and edit <code>Info.plist</code>, add the following lines.</p><div class="language-xml"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">NSCameraUsageDescription</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Camera permission description</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">NSMicrophoneUsageDescription</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Microphone permission description</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="screen-capture-support" tabindex="-1">Screen Capture Support <a class="header-anchor" href="#screen-capture-support" aria-hidden="true">#</a></h2><p>An extensive walkthrough will be included here soon.</p><h2 id="library-not-loaded-code-signature-invalid" tabindex="-1">Library not loaded/Code signature invalid <a class="header-anchor" href="#library-not-loaded-code-signature-invalid" aria-hidden="true">#</a></h2><p>This is an issue with iOS 13.3.1.</p><p>All dynamic frameworks being compiled to the newest release of iOS 13.3.1 are experiencing this issue when run on a personal provisioning profile/developer account.</p><p>Use a non-Personal Team provisioning profile (paid developer account) to resolve the issue. You can find more information <a href="https://stackoverflow.com/a/60090629/8691951" target="_blank" rel="noreferrer">here</a>.</p>`,15),r=[t];function l(i,p,c,d,u,h){return a(),s("div",null,r)}const D=e(n,[["render",l]]);export{y as __pageData,D as default};
