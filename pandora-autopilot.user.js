// ==UserScript==
// @name        Pandora AutoPilot
// @namespace   http://davidrickard.org
// @description Keep the music rolling on Pandora.
// @include     http://www.pandora.com/*
// @include     https://www.pandora.com/*
// @grant       none
// @version     0.1
// ==/UserScript==

var timer = setInterval(yeahImListening, 1000);

function yeahImListening() {
    document.querySelector("button[data-qa='keep_listening_button']").click();
}
