// ==UserScript==
// @name         Auto Login TU Dortmund
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Script to auto login into moodle of the TU Dortmund
// @author       Lars Wittemeier (lars.wittemeier@tu-dortmund.de)
// @match        https://*.tu-dortmund.de/*
// @icon         https://www.tu-dortmund.de/storages/administration/_processed_/4/7/csm_favicon-600x600_ccc9d33448.png
// @grant        none
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';
    console.log(window.location.href);
    if(window.location.href=="https://moodle.tu-dortmund.de/login/index.php"){
      document.getElementsByClassName("btn-primary")[0].click();
    }

    if(window.location.href.includes("https://sso.itmc.tu-dortmund.de/openam/XUI/")){
        var loginInterval = setInterval(function() {
                //console.log(document.getElementById("idToken1").value);
            if(document.getElementById('idToken1') !==null){
                console.log(document.getElementById("idToken1").value);
                if(document.getElementById("idToken1").value != ""){
                    console.log("Click Button")
                    document.getElementsByClassName("btn-primary")[0].click();
                }else if(document.getElementById("idToken1").value == "<empty string>"){
                    console.log("empty string detected")
                }
                clearInterval(loginInterval);
            }
        }, 300);

    }
    //if(window.location.hostname)


    // Your code here...
})();