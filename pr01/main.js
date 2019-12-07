import {ImageToggler} from './ImageToggler.js';
import {ExtendedImageToggler} from './ExtendedImageToggler.js';

export function init() {
    let imgElem = document.getElementById('imgElem');
    let btnShowImg = document.getElementById('btnShowImg');
    let btnRemoveImg = document.getElementById('btnRemoveImg');
    const imgToggle = new ImageToggler(imgElem, btnShowImg, btnRemoveImg);
    ImageToggler.helloWorld();
}


    // Setter: imgToggle.img = '';
    // Getter: console.log(imgToggle.img);