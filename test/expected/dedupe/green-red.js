require=function r(e,o,n){function t(i,f){if(!o[i]){if(!e[i]){var a="function"==typeof require&&require;if(!f&&a)return a(i,!0);if(u)return u(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var d=o[i]={exports:{}};e[i][0].call(d.exports,function(r){var o=e[i][1][r];return t(o?o:r)},d,d.exports,r,e,o,n)}return o[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)t(n[i]);return t}({5:[function(r,e,o){var n=r("colors");e.exports=r("./dark")+r("./red")+n.green},{"./dark":4,"./red":7,colors:8}],7:[function(r,e,o){var n=r("colors");e.exports=r("./dark")+n.red},{"./dark":4,colors:8}]},{},[5,7]);
