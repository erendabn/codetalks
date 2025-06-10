<div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:r15:-trigger-preview" id="radix-:r15:-content-preview" tabindex="0" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" style=""><div class="border border-border rounded-lg bg-background p-6 shadow-sm"><div class="prose prose-sm md:prose-base lg:prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600" style="user-select: none;"><div id="top" class="">

<div align="center" class="text-center">
<h1>CODETALKS</h1>
<p><em>Connect, Collaborate, Create: Empowering Developer Communities</em></p>

<img alt="last-commit" src="https://img.shields.io/github/last-commit/erendabn/codetalks?style=flat&amp;logo=git&amp;logoColor=white&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="repo-top-language" src="https://img.shields.io/github/languages/top/erendabn/codetalks?style=flat&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="repo-language-count" src="https://img.shields.io/github/languages/count/erendabn/codetalks?style=flat&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
<p><em>Built with the tools and technologies:</em></p>
<img alt="JSON" src="https://img.shields.io/badge/JSON-000000.svg?style=flat&amp;logo=JSON&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Markdown" src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&amp;logo=Markdown&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="npm" src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&amp;logo=npm&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Firebase" src="https://img.shields.io/badge/Firebase-DD2C00.svg?style=flat&amp;logo=Firebase&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&amp;logo=JavaScript&amp;logoColor=black" class="inline-block mx-1" style="margin: 0px 2px;">
<br>
<img alt="React" src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&amp;logo=React&amp;logoColor=black" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Formik" src="https://img.shields.io/badge/Formik-2563EB.svg?style=flat&amp;logo=Formik&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Expo" src="https://img.shields.io/badge/Expo-000020.svg?style=flat&amp;logo=Expo&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="datefns" src="https://img.shields.io/badge/datefns-770C56.svg?style=flat&amp;logo=date-fns&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
</div>
<br>
<hr>
<h2>Table of Contents</h2>
<ul class="list-disc pl-4 my-0">
<li class="my-0"><a href="#overview">Overview</a></li>
<li class="my-0"><a href="#getting-started">Getting Started</a>
<ul class="list-disc pl-4 my-0">
<li class="my-0"><a href="#prerequisites">Prerequisites</a></li>
<li class="my-0"><a href="#installation">Installation</a></li>
<li class="my-0"><a href="#usage">Usage</a></li>
</ul>
</li>
</ul>
<hr>
<h2>Overview</h2>
<p>Codetalks is a dynamic social media platform designed specifically for software developers, fostering collaboration and communication.</p>
<p><strong>Why Codetalks?</strong></p>
<p>This project aims to create a vibrant community for developers to connect and share ideas. The core features include:</p>
<ul class="list-disc pl-4 my-0">
<li class="my-0">💬 <strong>User Authentication:</strong> Secure login and registration using Firebase, ensuring safe user management.</li>
<li class="my-0">🛠️ <strong>Room Creation and Management:</strong> Easily create and manage chat rooms to enhance collaboration.</li>
<li class="my-0">⚡ <strong>Real-time Messaging:</strong> Instant communication capabilities for seamless interactions.</li>
<li class="my-0">🎨 <strong>User-friendly Interface:</strong> Designed with a focus on user experience for effortless navigation.</li>
<li class="my-0">🏗️ <strong>Modular Architecture:</strong> Promotes maintainability and scalability for future enhancements.</li>
<li class="my-0">🌐 <strong>Cross-platform Compatibility:</strong> Ensures a consistent experience across iOS, Android, and web platforms.</li>
</ul>
<hr>
<h2>Getting Started</h2>
<h3>Prerequisites</h3>
<p>This project requires the following dependencies:</p>
<ul class="list-disc pl-4 my-0">
<li class="my-0"><strong>Programming Language:</strong> JavaScript</li>
<li class="my-0"><strong>Package Manager:</strong> Npm</li>
  <li class="my-0"><strong>Firebase Config File:</strong> <a href="https://console.firebase.google.com/">firebase dashboard</a></li>
  <li class="my-0"><strong>Metro Config:</strong> Terminal</li>
</ul>
<h3>Installation</h3>
<p>Build codetalks from the source and intsall dependencies:</p>
<ol>
<li class="my-0">
<p><strong>Clone the repository:</strong></p>
<pre><code class="language-sh">❯ git clone https://github.com/erendabn/codetalks
</code></pre>
</li>
<li class="my-0">
<p><strong>Navigate to the project directory:</strong></p>
<pre><code class="language-sh">❯ cd codetalks
</code></pre>
</li>
<li class="my-0">
<p><strong>Install the dependencies:</strong></p>
<p><strong>Using <a href="https://www.npmjs.com/">npm</a>:</strong></p>
<pre><code class="language-sh">❯ npm install
</code></pre>
</li>
  <li class="my-0">
    <div >Initialize the SDK in your project<a c></span></a></h4><p >After you have the API key and other identifiers, you can paste the following code snippet by creating a new <span >firebaseConfig.js</span> file in your project's root directory or any other directory where you keep the configuration files.</p><div ><div ><span ><span >firebaseConfig.js</span></span><div >
<pre ><code class="language-sh">// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase } from "firebase/database";
// Initialize Firebase</span>
const firebaseConfig = {
apiKey: 'api-key',
authDomain: 'project-id.firebaseapp.com',
databaseURL: 'https://project-id.firebaseio.com',
projectId: 'project-id',
storageBucket: 'project-id.appspot.com',
messagingSenderId: 'sender-id',
appId: 'app-id',
};
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app,{
persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export default app;
</code></pre>
</div>
</div>
</li>
<li class="my-0">
Start by generating the template file metro.config.js in your project's root directory using the following command:
<pre><code class="language-sh">npx expo customize metro.config.js</code></pre>
Then, update the file with the following configuration:
<pre><code class="language-sh">const { getDefaultConfig } = require('@expo/metro-config');
const config = getDefaultConfig(__dirname);
config.resolver.sourceExts.push('cjs');
config.resolver.unstable_enablePackageExports = false;
module.exports = config;</code></pre>
</li>
</ol>
<h3>Usage</h3>
<p>Run the project with:</p>
<p><strong>For ios:</strong></p>
<pre><code class="language-sh">npx expo run:ios
</code></pre>
<p><strong>For android:</strong></p>
<pre><code class="language-sh">npx expo run:android
</code></pre>
<hr>
<div align="left" class=""><a href="#top">⬆ Return</a></div>
<hr></div></div></div></div>
