import {ImageToggler} from './ImageToggler.js';

export class ExtendedImageToggler extends ImageToggler {
    constructor(imgElem, btnShowImg, btnRemoveImg, dummyTextElem='') {
        // Mora da postoji poziv super klase
        // super - referenca na ImageToggler
        super(imgElem, btnShowImg, btnRemoveImg); // konstruktor super klase
        this.dummyTextElem = dummyTextElem;
    }

    showPicture(event) {
        console.log('Overwritten show picture func!');
    }
}