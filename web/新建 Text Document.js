// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://bookss.ldlibrary.com:8081/opac/browse/cls
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ldlibrary.com
// @grant        none
// ==/UserScript==

// <link rel="stylesheet" type="text/css" href="/opac/media/style/default/main.css"></link>
// 需求，，，浮动条，框调整大小，高度限制, height:auto;
// 问题，font-family为什么乱码，为什么高度auto表现不一样，子元素？
(function() {
    'use strict';
    // new link_css element
    let link_css = document.createElement('link');
    link_css.rel = 'stylesheet';
    link_css.type = "text/css";
    link_css.href = "http://bookss.ldlibrary.com:8081/opac/media/style/default/main.css";
    // find head ,append link_css element
    document.head.appendChild(link_css);
    // disable float:right
    let contentDiv = document.getElementById('contentDiv');
    contentDiv.style.float = 'none';
    contentDiv.style.height = '700px';
    contentDiv.style.overflow = 'auto';
    // Your code here...
})();