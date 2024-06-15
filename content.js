/*
MIT License

Copyright (c) 2024 zawataku

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

function createFullscreenButton() {
    const button = document.createElement('button');
    button.textContent = '全画面';
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.right = '10px';
    button.style.padding = '10px';
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = 1000;
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        const targetElements = document.getElementsByClassName('pos_relative overflow_hidden rounded_12px shadow_1px_2px_3px_rgba(0,_0,_0,_0.25) ring_none w_100%');
        if (targetElements.length > 0) {
            const targetElement = targetElements[0];
            toggleFullscreen(targetElement);
        }
    });
}

function toggleFullscreen(elem) {
    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => {
            alert(`全画面表示する際にエラーが発生しました: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}

createFullscreenButton();
