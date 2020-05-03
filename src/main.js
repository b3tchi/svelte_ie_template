// import 'es6-shim';
import 'whatwg-fetch';
import 'promise-polyfill/src/polyfill';
import App from './App.svelte';

var app = new App({
	target: document.body
});

export default app;