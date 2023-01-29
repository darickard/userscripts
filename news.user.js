// ==UserScript==
// @name        News sites
// @namespace   davidrickard.org
// @description Add useful functionality to news sites
// @include     https://www.sfgate.com/*
// @include     https://www.eastbaytimes.com/*
// @version     1
// @grant       GM_addStyle
// ==/UserScript==
Date.prototype.today = function () {
  return (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1)
    + "/" + ((this.getDate() < 10) ? "0" : "") + this.getDate()
    + "/" + this.getFullYear();
}

Date.prototype.timeNow = function () {
  return ((this.getHours() < 10) ? "0" : "") + this.getHours()
    + ":" + ((this.getMinutes() < 10) ? "0" : "")
    + this.getMinutes() + ":"
    + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
}

var pageLoadDate = new Date();
var pageLoadDateTime = pageLoadDate.today() + " " + pageLoadDate.timeNow();

var pageLoadTimeDiv = document.createElement ('div');
pageLoadTimeDiv.innerHTML = '<div id="pageLoadTime">'
  + '<p>' + pageLoadDateTime + '</p></div>';

document.body.appendChild(pageLoadTimeDiv);

GM_addStyle(
  "#pageLoadTime {"
    + "font-family: Arial, Helvetica, sans-serif; "
    + "font-size: 80%; "
    + "position: fixed; "
    + "top: 0px; "
    + "left: 120px; "
    + "z-index: 2000; "
  + "}"
);
