// ==UserScript==
// @name         哔哩哔哩笔记/B站笔记/哔站笔记/bilibli笔记，选中文字放大加粗
// @namespace    https://space.bilibili.com/391912695  https://github.com/PaperFly-web/
// @author       PaperFly
// @match        http*://www.bilibili.com/video/*
// @match        https://www.bilibili.com/medialist/*
// @icon         https://static.hdslb.com/images/favicon.ico
// @grant        none
// @description  2023-6.13:更新--》alt + 1 2 3 4 5放大的选中的文字，并加粗。按第二次，加粗失效，但是放大不会失效；alt+f:选择文字变灰  alt+d:选择文字变黑  alt+g:选择文字变绿  alt+b:选择文字变蓝 alt+r:选择文字变红 alt+y:选择文字变黄
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown', function(event) {
        if (event.altKey && (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5')) {
            bold();
            console.log(event.key)
            event.preventDefault();
            var pre = "";
            if(event.key === '1'){
                var sizeElement1 = document.querySelector('span.ql-picker-item[data-value="24px"][data-label="24"]');
                if (sizeElement1) {
                    sizeElement1.click();
                }
            }
            if(event.key === '2'){
                var sizeElement2 = document.querySelector('span.ql-picker-item[data-value="22px"][data-label="22"]');
                if (sizeElement2) {
                    sizeElement2.click();
                }
            }
            if(event.key === '3'){
                var sizeElement3 = document.querySelector('span.ql-picker-item[data-value="20px"][data-label="20"]');
                if (sizeElement3) {
                    sizeElement3.click();
                }
            }

            if(event.key === '4'){
                var sizeElement4 = document.querySelector('span.ql-picker-item[data-value="18px"][data-label="18"]');
                if (sizeElement4) {
                    sizeElement4.click();
                }
            }

            if(event.key === '5'){
                var sizeElement5 = document.querySelector('span.ql-picker-item[data-value="17px"][data-label="17"]');
                if (sizeElement5) {
                    sizeElement5.click();
                }
            }
        }

        if (event.altKey && (event.key === 'r' || event.key === 'R')){
            event.preventDefault();

            var elementr = document.querySelector('.ql-picker-item[data-value="#ee230d"]');
            if(elementr){
                elementr.click();
            }

        }
        if (event.altKey && (event.key === 'd' || event.key === 'D')){
            event.preventDefault();

            var elementd = document.querySelector('.ql-picker-item.ql-primary[data-value="#000000"]');
            if(elementd){
                elementd.click();
            }
        }

        if (event.altKey && (event.key === 'b' || event.key === 'B')){
            event.preventDefault();

            var elementb = document.querySelector('span.ql-picker-item[data-value="#0b84ed"]');

            if(elementb){
                elementb.click();
            }
        }

        if (event.altKey && (event.key === 'g' || event.key === 'G')){
            event.preventDefault();

            var elementg = document.querySelector('span.ql-picker-item[data-value="#1db100"]');

            if(elementg){
                elementg.click();
            }
        }

        if (event.altKey && (event.key === 'y' || event.key === 'Y')){
            event.preventDefault();

            var elementy = document.querySelector('span.ql-picker-item[data-value="#fbe231"]');

            if(elementy){
                elementy.click();
            }
        }

        if (event.altKey && (event.key === 'f' || event.key === 'F')){
            event.preventDefault();
            var elementf = document.querySelector('span.ql-picker-item.ql-primary[data-value="#a5a5a5"]');
            if(elementf){
                elementf.click();
            }
        }
    });



    function bold(){

        // 通过class找到元素
        var elements = document.getElementsByClassName('ql-bold');

        // 如果有多个元素符合条件，可以遍历它们
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            // 模拟点击事件
            var clickEvent = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });

            element.dispatchEvent(clickEvent);
        }
    }

})();
